function Vue(options) {
      this.data = options.data;
      var data = this.data;
      observe(data, this);
      var id = options.el;
      var dom =new Compile(document.getElementById(id),this);
      // 编译完成后，将dom返回到app中
      document.getElementById(id).appendChild(dom);
    }