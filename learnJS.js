/**
 * Created by xiyuanbupt on 15/9/29.
 */

function sum(arr){
    return arr.reduce(
        function (x,y){
            return x+y;
        }
    )
}

//闭包的威力很大

function lazy_sum(arr){
    var sum=function(){
        return arr.reduce(function(x,y){
                return x+y;
            }
        );
    }
    return sum;
}

var f=lazy_sum([1,2,3,4]);
console.log(f);
console.log(f());

//返回闭包的时候一定不要引用任何循环的变量

function count(){
    var arr=[];
    for (var i=1;i<=3;i++){
        arr.push(
            function(){
                return i*i;
            }
        );
    }
    return arr;
}
var results=count();
var f1=results[0];
var f2=results[1];
var f3=results[2];

console.log(f1());
console.log(f2());
console.log(f3());

//如果一定要用循环变量可以用如下的方法解决

function count2(){
    var arr=[];
    for (var i=1;i<=3;i++){
        arr.push(
            (function(n){
                return function(){
                    return n*n;
                }
            }
        )(i));
    }
    return arr;
}

results=count2();
var f1=results[0];
var f2=results[1];
var f3=results[2];

console.log(f1());
console.log(f2());
console.log(f3());

//下面是创建一个函数并立即执行的方法
(
    function(x){
        return x*x;
    }
)(3);

a=(
    function(x){
        return x*x;
    }
)(2);
console.log('a的结果为');
console.log(a);

console.log(1 || 0);

