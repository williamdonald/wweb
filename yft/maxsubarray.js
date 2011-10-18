function max_subarray(a){

var max_sum = Number.MIN_VALUE;
var max_begin = 0;
var max_end = 0;

var current_sum = 0;
var current_begin = 0;
var current_end = 0;

for(current_end=0;current_end<a.length;current_end++){
    current_sum += a[current_end];
    if(current_sum>max_sum){
        max_sum = current_sum;
        max_begin = current_begin;
        max_end  = current_end;
    }

    if(current_sum<0){
        current_sum = 0;
        current_begin = current_end + 1;
    }
}

console.log("maxsum: "+max_sum+"! begins at: "+max_begin+" and ends with:"+max_end);

}

var a = [-10,5,-9,6,7,8,9,1];

max_subarray(a);
