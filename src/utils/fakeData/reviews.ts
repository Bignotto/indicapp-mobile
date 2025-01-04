const reviews = [
  {
    id: 1,
    title: "Exceeded my expectations",
    text: "The product quality is outstanding. The materials used are premium and the attention to detail is evident in every aspect. I particularly loved the quick delivery and excellent customer service.",
    score: 5,
    reviewDate: new Date("2024-01-02"),
    recommend: true,
    reviewer: {
      id: 101,
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 2,
    title: "Good but room for improvement",
    text: "While the core features work well, there are some minor issues with the user interface. The learning curve is a bit steep, but once you get used to it, it's quite efficient.",
    score: 4,
    reviewDate: new Date("2023-12-28"),
    recommend: true,
    reviewer: {
      id: 102,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 3,
    title: "Not worth the price",
    text: "I found the product to be overpriced for what it offers. The basic functionality is there, but it lacks many features that competitors provide at a lower price point.",
    score: 2,
    reviewDate: new Date("2023-12-15"),
    recommend: false,
    reviewer: {
      id: 103,
      name: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 4,
    title: "Perfect for my needs",
    text: "This exactly matched what I was looking for. Setup was straightforward and the performance has been reliable. The battery life is impressive and it integrates well with my other devices.",
    score: 5,
    reviewDate: new Date("2024-01-03"),
    recommend: true,
    reviewer: {
      id: 104,
      name: "David Kim",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 5,
    title: "Disappointing durability",
    text: "After just two months of normal use, it started showing significant wear and tear. The customer service was helpful but couldn't resolve the underlying quality issues.",
    score: 2,
    reviewDate: new Date("2023-11-20"),
    recommend: false,
    reviewer: {
      id: 105,
      name: "Lisa Thompson",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 6,
    title: "Decent but not amazing",
    text: "It gets the job done but doesn't particularly excel in any area. The price is reasonable for what you get, but don't expect to be blown away.",
    score: 3,
    reviewDate: new Date("2023-12-05"),
    recommend: true,
    reviewer: {
      id: 106,
      name: "James Wilson",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 7,
    title: "Game changer for my workflow",
    text: "I've been using this for three months now and it has significantly improved my productivity. The automation features are particularly impressive.",
    score: 5,
    reviewDate: new Date("2024-01-01"),
    recommend: true,
    reviewer: {
      id: 107,
      name: "Nina Patel",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 8,
    title: "Terrible customer support",
    text: "While the product itself is okay, dealing with customer service was a nightmare. Took weeks to get a response to a simple question.",
    score: 1,
    reviewDate: new Date("2023-11-15"),
    recommend: false,
    reviewer: {
      id: 108,
      name: "Robert Garcia",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 9,
    title: "Solid performance",
    text: "It's been reliable and consistent. Not the most exciting product but it delivers on all its promises. The monthly updates keep improving the experience.",
    score: 4,
    reviewDate: new Date("2023-12-22"),
    recommend: true,
    reviewer: {
      id: 109,
      name: "Ashley Brown",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 10,
    title: "Mixed feelings",
    text: "There are some really great features that I love, but also some frustrating limitations. The recent update improved some issues but introduced new bugs.",
    score: 3,
    reviewDate: new Date("2023-12-18"),
    recommend: false,
    reviewer: {
      id: 110,
      name: "Thomas Anderson",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 11,
    title: "Worth every penny",
    text: "The premium price is justified by the premium experience. Everything from unboxing to daily use feels carefully thought out and well-executed.",
    score: 5,
    reviewDate: new Date("2024-01-04"),
    recommend: true,
    reviewer: {
      id: 111,
      name: "Maria Santos",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 12,
    title: "Needs more polish",
    text: "The core concept is good but the implementation feels rushed. Several basic features are missing and the interface could use more refinement.",
    score: 3,
    reviewDate: new Date("2023-12-10"),
    recommend: false,
    reviewer: {
      id: 112,
      name: "Alex Turner",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  }
];

export default reviews;