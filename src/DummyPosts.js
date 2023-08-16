const DummyPosts = [
  {
    key: Math.random().toString(),
    title: "title1",
    author: "user1",
    commentCount: 10,
    recommendationCount: 42,
    date: new Date(2023, 8, 15),
  },
  {
    key: Math.random().toString(),
    title: "title2",
    author: "user2",
    commentCount: 8,
    recommendationCount: 0,
    date: new Date(2023, 8, 15),
  },
  {
    key: Math.random().toString(),
    title: "title3",
    author: "user3",
    commentCount: 12,
    recommendationCount: 231,
    date: new Date(2023, 7, 22),
  },
  {
    key: Math.random().toString(),
    title: "title4",
    author: "user4",
    commentCount: 2832,
    recommendationCount: 21,
    date: new Date(2023, 1, 15),
  },
];

export default DummyPosts;
