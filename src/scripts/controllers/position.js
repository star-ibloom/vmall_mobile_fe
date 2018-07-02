const positionTpl = require('../views/position.html')


module.exports = {
  async render({res, router}){
    this.renderList({res,router})
    
  },
  
  async renderList({res,router}){
    let result = await this.getComList()
    let tpl = template.render(positionTpl,{data:result})
    res.render(tpl)
    
    $('#addbtn').on('click', () => {
      // console.log(1)
      router.go('/position_save')
    })

    this.removePos({res, router})
  },
  
  getComList : () => { 
    return $.ajax({
      url:'/api/comment/find',
      success:(result) => {
        // console.log(result)
        return result
      }
    }) 
  },

  removePos({res,router}){
    let that  = this
    $('.btn-danger').on("click",function(){
      let id = $(this).attr('posid')
      let filename = $(this).attr('filename')
      if(window.confirm('真的要删除吗')){
        $.ajax({
          url:'/api/comment/remove',
          type: 'delete',
          data:{
            id,
            filename
          },
          success:(result) => {
            // console.log(result)
            if(result.ret){
              that.renderList({res,router})
            }
          }
        })
      }
    })
  }

}
