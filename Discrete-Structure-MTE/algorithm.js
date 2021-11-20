function algorithm()
{
    for (let key of Object.keys(map.collection))
    {
        let val = map.collection[key];
        if(val > 0) positive.push({key,val});
        if(val < 0)
        {
            val = -val;
            negative.push({key,val});
        }
    };
    
    function decending(a,b)
    {
        if ( a.val > b.val ) return -1;
        if ( a.val < b.val ) return 1;
        return 0;
    }
    
    positive.sort(decending);
    negative.sort(decending);
    let l = 0, r = 0;
    let pos = positive.length;
    let neg = negative.length;

    while(l<pos && r<neg)
    {
        let cost = Math.min(positive[l].val,negative[r].val);
        positive[l].val = positive[l].val - cost;
        negative[r].val = negative[r].val - cost;

        let from = positive[l].key;
        let to = negative[r].key;

        ans.push({to,from,cost});

        if(positive[l].val==0) l++;
        if(negative[r].val==0) r++;
    }

    for(let i=0;i < ans.length;i++)
    {
        a = document.getElementById("ansList");
        b =  document.createElement("div");

        field  = document.createTextNode(ans[i].from + " -> ");
        field1 = document.createTextNode(ans[i].to + " : ");
        field2 = document.createTextNode(ans[i].cost);

        b.appendChild(field);
        b.appendChild(field1);
        b.appendChild(field2);  
        a.appendChild(b);
    }
}