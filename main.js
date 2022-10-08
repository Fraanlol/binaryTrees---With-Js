import * as sort from './sortFunctions.js'

const  noDuplicates = arr =>{
    let tempArr = [];

    arr.forEach((key,index) => {
        if(arr.indexOf(key) === index){
            tempArr.push(key);
        }
    })

    return tempArr;
}

const newNode = (value) => {
    let data = value;
    let left = null;
    let right = null;

    return{data,left,right}
}

const newTree = (unorderedArray) => {
    let arr = noDuplicates(unorderedArray);
    sort.mergeSort(arr, arr.length-1,0);
    let treeRoot = buildTree(arr,0, arr.length-1);

    const insert = (val,root = treeRoot) => {
        if(val < root.data){
            if(root.left === null){
                return root.left = newNode(val);
            }else{
                return insert(val,root.left);
            }
        }else{
            if(root.right=== null){
                return root.right = newNode(val);
            }else{
                return insert(val,root.right);
            }
        }
    }

    const remove = (val, root = treeRoot) =>{
        //Si el valor es menor, voy para izquierda
        //Si el valor es mayor voy para derecha
        //Si el root actual equivale al valor, lo elimino.
        //Pero tengo que mantener el arbol conectado
    }

    return {treeRoot, insert, remove}
}

function buildTree (arr,l,r) {
    if (l > r) return null;
    let mid = l + parseInt(((r-l)/2));
    let root = newNode(arr[mid]);
    root.left = buildTree(arr,l,mid-1);
    root.right = buildTree(arr,mid+1,r);
    return root;

}

let test = newTree([1,2,5,4,6,7,8,9,3,2,4,12,13,14,15,65,76,87,98,13,5432,2356,432,5,1,2,3,-123,-123,-12]);


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

prettyPrint(test.treeRoot)


