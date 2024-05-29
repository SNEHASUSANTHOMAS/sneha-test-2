$(document).ready(function(){

    let navbarHandler={
        menuIcon:null,
        topNavItems:null,
        closeIcon:null,
        init:function(){
            this.menuIcon=$(".menu-icon");
            this.topNavItems=$(".top-nav-items");
            this.closeIcon=$(".close-icon");
            
        },
        eventHandler:function(){
            
            let that=this;
            this.menuIcon.click(function(){
                that.topNavItems.toggleClass('show');
            });
            this.closeIcon.click(function(){
              
                that.topNavItems.removeClass('show');

            })

        }
    }
    navbarHandler.init();
    navbarHandler.eventHandler();
})