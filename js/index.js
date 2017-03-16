window.onload = function(){
  var vm =  new Vue({
    el: "#baidu",
    data:{
      myData:[],
      ipt:'',
      now:-1
    },
    methods:{
      get:function(ev){
          /*if(ev.keyCode==38 || ev.keyCode==40)return;*/

          this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
              wd:this.ipt
          },{
              jsonp:'cb'
          }).then(function(res){
              this.myData=res.data.s;
          },function(){
              
          });
      },
      search(){
              window.open('https://www.baidu.com/s?wd='+ this.ipt);
              this.ipt='';
      },
      changeDown:function(){
          this.now++;
          if(this.now==this.myData.length)this.now=-1;
          this.ipt=this.myData[this.now];
      },
      changeUp:function(){
          this.now--;
          if(this.now==-2)this.now=this.myData.length-1;
          this.ipt=this.myData[this.now];
      },
      set:function(){
          window.open('https://www.baidu.com/s?wd='+ this.ipt);
      },
      ser:function(ev){
          window.open('https://www.baidu.com/s?wd='+ ev.target.innerHTML);
      },
      ifColor:function(){
          var text = document.querySelector('.text');
          text.setAttribute('class', 'text text-blur');
      },
      shColor:function(){
          var text = document.querySelector('.text');
          text.setAttribute('class', 'text');
      }
    },
    computed:{

     },
  });
  vm.$watch('myData', function () {
    var oList = document.querySelector('#list');
    if(this.myData.length == 0){
        oList.style.display = 'none';
    }
    if(this.myData.length !== 0){
        oList.style.display = 'block';
    }
  })
}
