$(()=>{
    $('input[type="text"]').on({
        keyup: function(){
            changeInput(this)
            submitDisable();
        },
        focus: function(){
            changeInput(this);
        }
    })
})