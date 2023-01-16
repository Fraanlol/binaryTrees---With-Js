/* This program will build a binary tree with a given array of numbers */

/* First I need to create nodes */

import * as sort from "./sortFunctions.js";

const newNode = (n) => {
    let data = n;
    let left = null;
    let right = null;

    return{data,right,left}
}

/* Then I need to make sure there's no duplicates on the array */

const noDuplicates = numbersArray => {

    let tempArr = [];
        /* If you run indexOf on an array item, it will return the first index to it, so this ensures there's no dups*/
    numbersArray.forEach((key,index) => {
        if(numbersArray.indexOf(key) === index){
            tempArr.push(key);
        }
    })

    return tempArr;
}

/* Now I've to build the tree recursively */

const buildTree = (arr,l,r) => {
    if (l > r) return null;
    let mid = l + parseInt(((r-l)/2));
    let root = newNode(arr[mid]);
    root.left = buildTree(arr,l,mid-1);
    root.right = buildTree(arr,mid+1,r);

    return root;

}


/* Have a Class or Constructor, for Trees!*/

const newTree = numbers => {
    let arr = noDuplicates(numbers);
    sort.mergeSort(arr, arr.length-1,0);
    let treeRoot = buildTree(arr,0, arr.length-1);

    const find = (val , root = treeRoot )=>{
        if (val === root.data){
            console.log("Data already in tree!")
            return true
        }

        if(val > root.data && root.right !== null){
            return find(val,root.right)
        }else if(val < root.data && root.left !== null){
            return find(val,root.left)
        }
        return false
    }
    const insert = (val,root = treeRoot) => {
        if (find(val,root)) return null
        if(val < root.data){
            if(root.left === null){
                return root.left = newNode(val);
            }else{
                return insert(val,root.left);
            }
        }else{
            if(root.right === null){
                return root.right = newNode(val);
            }else{
                return insert(val,root.right);
            }
        }
    }

    const remove = (val, root = treeRoot, prev = null) =>{
        if(root.data === val){
            if(root.right === null){
                root = root.left
                prev.left = root
                console.log(prev)
                return true
            }else{
                // Find successor
            }
        }else{
            if(val > root.data && root.right !== null){
                return remove(val,root.right,root)
            }else if(val < root.data && root.left !== null){
                return remove(val,root.left,root)
            }
            console.log("The number you want to remove doesn't exist")
            return false
        }
    }

    return {treeRoot, insert, find, remove}
}



/* Print the tree on console */

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

let ejemplo = [1,2,3,4,5,6,7,8,9]
let arbol = newTree(ejemplo)
arbol.remove(1)
arbol.remove(4)
//prettyPrint(arbol.treeRoot)