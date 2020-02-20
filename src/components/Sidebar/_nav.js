export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-th',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW'
      // }
    },
    {
      name: 'Parking Management',
      url: '/parking',
      icon: 'fa fa-th',
    },
    {
      name: 'User Management',
      url: '/parking',
      icon: 'fa fa-th',
    },
    {
      name: 'Role Management',
      url: '/parking',
      icon: 'fa fa-th',
      children: [
        {
          name: 'Subitem1',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Subitem2',
          url: '/base/cards',
          icon: 'icon-puzzle'
        }
      ]
    }
  ]
};
