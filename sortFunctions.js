export function mergeSort(arr, r, l) {
    if (l >= r) {
        return;
    } else {
        let m = l + parseInt((r - l) / 2);
        mergeSort(arr, m, l);
        mergeSort(arr, r, m + 1);
        merge(arr, m, l, r);
    }
}
export function merge(arr, m, l, r) {

    let L = new Array((m - l) + 1);
    let R = new Array(r - m);
    let i = 0;
    let j = 0;

    for (i = 0; i < L.length; i++) {
        L[i] = arr[l + i];
    }


    for (j = 0; j < R.length; j++) {
        R[j] = arr[m + j + 1];
    }

    i = j = 0;
    let k = l;

    while (i < L.length && j < R.length) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < L.length) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < R.length) {
        arr[k] = R[j];
        j++;
        k++;
    }
}