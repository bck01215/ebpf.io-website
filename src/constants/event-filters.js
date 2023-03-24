const eventFilters = [
  {
    name: 'Types',
    label: 'eventtype',
    items: [
      {
        name: 'Webinar',
      },
      {
        name: 'Meetup',
      },
      {
        name: 'Conference',
      },
    ],
  },
  {
    name: 'Conference',
    label: 'conference',
    items: [
      {
        name: 'eBPF Summit',
      },
      {
        name: 'Cloud Native eBPF Day',
      },
      {
        name: 'eBPF Track (LPC)',
      },
      {
        name: 'bpfconf (LSF/MM/BPF)',
      },
    ],
  },
  {
    name: 'Region',
    label: 'region',
    items: [
      {
        name: 'Online',
      },
      {
        name: 'APAC',
      },
      {
        name: 'EMEA',
      },
      {
        name: 'North America',
      },
    ],
  },
];

// We are using ES modules here in order to be able to import variables from this file in gatsby-node.js
module.exports = {
  eventFilters,
};
