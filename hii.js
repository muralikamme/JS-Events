let a =[1,3,4,5,6,1,3,4]
unq=[];

dup=[];
for(i=0;i<a.length;i++){
    if(!unq.includes(a[i])){
        unq.push(a[i])
          
    }else{
        dup.push(a[i])
    }
  
} console.log(dup.length," numbers are duplicate  in given array")


// for( i=0;i<emp.length;i++){
//     count=0;
//     for(j=0;j<a.length;j++){
//         if(i==j){
//            count++ 
//         }
           
        
//     }

//    }   console.log(count)
// // if(count==1){
// // unq.push(i);
// // }else{
// //     dup.push(i)
// // }
// // }

// // console.log(dup.length)

