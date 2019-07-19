import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
})

// prisma.query prisma.mutation prisma.subscription prisma.exists

prisma.query.users(null, '{ id name posts { id title } }').then((data) => {
    // console.log(JSON.stringify(data, undefined, 2))
})

prisma.query.comments(null, '{ id text author { id name } }').then((data) => {
    // console.log(JSON.stringify(data, undefined, 2))
})

// prisma.mutation.createPost({
//   data: {
//     title: "My next graphQl post",
//     body: "Body of text 2",
//     published: true,
//     author: {
//         connect: {
//           id: "cjyabwo0j00ev0625x9q4i8h1"
//         }
//     }
//   }
// }, '{ id title body published author { id name }}').then((data) => {
//     console.log(data, "first one")
//     return prisma.query.users(null, '{ id name posts { id title } }')
//   }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2), 'the second one')
// })


prisma.mutation.updatePost({
  where: {
    id: "cjyaparz3019h062533i72gxd"
  },
  data: {
    title: "My updat234234234ed post",
    body: "Body of text 1234234",
    published: false,
    author: {
        connect: {
          id: "cjyabwo0j00ev0625x9q4i8h1"
        }
    }
  }
}, '{ id title body published author { id name }}').then((data) => {
    console.log(JSON.stringify(data, undefined, 2), "first one")
    return prisma.query.posts(null, '{ id title body published author { id name } }')
  }).then((data) => {
    console.log(JSON.stringify(data, undefined, 2), 'the second one')
})
