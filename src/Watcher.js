function Watcher(vm, node, name, type) {
      Dep.target = this;
      this.name = name;
      this.node = node;
      this.vm = vm;
      this.type = type;
      this.update();
      Dep.target = null;
    }

    Watcher.prototype = {
      update: function() {
        this.get();
        this.node[this.type] = this.value; // 订阅者执行相应操作
      },
      // 获取data的属性值
      get: function() {
        this.value = this.vm[this.name]; //触发相应属性的get
      }
    }