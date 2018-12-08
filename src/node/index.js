export class Node {
    constructor(data,children=[]){
        this.data = data;
        this.children = children;
        // 默认 return this
    }

    insert(index,node){
        // 为了性能不判断children的长度是否大雨index
        this.children.split(index,0,node);
    }

    before(node){
        this.children.unshift(node);
    }

    after(node){
        this.children.push(node)
    }

    static total = 0;

    static count(n) {
        Node.total += n
    }
}