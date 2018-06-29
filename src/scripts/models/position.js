const list = (data) => {
    return $.ajax({
        url: '/api/comment/save',
        type: 'POST',
        data,
        success: (result) => {
            // this.handleSubmitSucc(result, router)
            return result
        }
    })
}


module.exports = {
    list
}