var adminJson = {
  common: '',
  modules: [
    {
      name: '员工管理',
      layout: [
        {
          id: '1',
          componentId: 1, // Button
          params: {
            style: 'top: 12px;left: 12px', // 位置
            size: 'middle', // 大小
            type: 'primary', // 类型
            text: '增加', // 文案
            href: 'www.baidu.com', // 跳转地址
          },
          click: {
            type: 0,  // 0: 弹框；1: 页面跳转； 2: 数据增加； 3: 
          }
        },
        {
          id: '2',
          componentId: 2, // Table
          params: {
            style: 'top: 12px;left: 12px', // 位置
            size: 'middle', // 大小
            pagination: true, // 显示分页器
          },
          columns: [ // 列数据
            {
              title: '姓名',
            },
            {
              title: '年龄',
            },
            {
              title: '住址',
            }
          ]
        }
      ]
    }
  ]
}