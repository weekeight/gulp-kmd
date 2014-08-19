KISSY.add("subtest", function(S, Node, IO){
    return {
        init: function() {
            var $ = Node.all;
            IO();
        }
    }
 },{
    requires: [
        "anim",
        "io"
    ]
 });