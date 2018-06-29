const positionAddTpl = require('../views/position.add.html')
const positionModel =require('../models/position')

module.exports = {
  render({res, req,router}) {
    res.render(positionAddTpl)
    $('#addback').on('click', () => {
      router.back()
    })
    this.handleSubmit(router)
  },

  handleSubmit(router) {
    $('#addsubmit').on('click', async () => {
      var options = {
        "success": (result,status) => {
          this.resultForm(result,status,router)
        },
        "resetForm":true,
        "dataType":"json"
      };  
      $("#possave").ajaxSubmit(options)

      // let goodNum = $('#goodNum').val(),
      // CommentTitle = $('#CommentTitle').val(),
      // CommentFrom = $('#CommentFrom').val(),
      // CommentBody = $('#CommentBody').val(),
      // CommentPhone = $('#CommentPhone').val()

      // const result = await positionModel.list({
      //     goodNum,
      //     CommentTitle,
      //     CommentFrom,
      //     CommentBody,
      //     CommentPhone,
      // })

      // if(result.ret){
      //   router.back()
      // }

  }) 
  },

  resultForm(result,status,router){
    console.log(result)
    if(result.ret){
      router.back()
    }
  }
}


