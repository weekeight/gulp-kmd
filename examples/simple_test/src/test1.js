KISSY.add("test", function(S, Node, IO){
    return {
        init: function() {
            var $ = Node.all;
            IO();
        }
    }
 },{
    requires: [
        "node",
        "io"
    ]
 });