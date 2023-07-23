function Merge()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N)";

    // Setting details
    document.getElementById("details").innerHTML="Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array."

    const linkElement = document.getElementById("reference")
    linkElement.setAttribute('href', "https://www.geeksforgeeks.org/merge-sort/")
    linkElement.style.display = 'block';

    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"green");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}