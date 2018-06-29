const positionTpl = require('../views/position.html')


module.exports = {
  async render({res, router}){
    let result = await this.getComList()
    let tpl = template.render(positionTpl,{data:result})
    // console.log(tpl)
    res.render(tpl)
    $('#addbtn').on('click', () => {
      router.go('/position_save')
    })
  },

  getComList : () => {
    return $.ajax({
      url:'/api/comment/find',
      success:(result) => {
        // console.log(result)
        return result
      }
    })
  }

}
