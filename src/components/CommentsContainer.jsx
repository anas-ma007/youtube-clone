/* eslint-disable react/prop-types */
import React from 'react'


const commentData = [
  {
    name: "anas",
    comment: "sample laurem lipsum comment",
    replies: [
      {
        name: "anas",
        comment: "sample laurem lipsum comment",
        replies: [
          {
            name: "anas",
            comment: "sample laurem lipsum comment",
            replies: [
              {
                name: "anas",
                comment: "sample laurem lipsum comment",
                replies: [
                  {
                    name: "anas",
                    comment: "sample laurem lipsum comment",
                    replies: [

                    ]
                  },

                ]
              },

            ]
          },

        ]
      },

    ]
  },
  {
    name: "anas",
    comment: "sample laurem lipsum comment",
    replies: [

    ]
  },
  {
    name: "anas",
    comment: "sample laurem lipsum comment",
    replies: [{
      name: "anas",
      comment: "sample laurem lipsum comment",
      replies: [

      ]
    }, {
      name: "anas",
      comment: "sample laurem lipsum comment",
      replies: [{
        name: "anas",
        comment: "sample laurem lipsum comment",
        replies: [

        ]
      },

      ]
    },

    ]
  },




]

const Comment = ({data}) => {
  const [name, comment, replies] = data;
  return (
    <div className=' flex p-1 shadow-lg rounded ml-2 m-2  bg-gray-300'>
      <img className='h-9 px-auto mx-2 mt-2' src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg" alt="user" />
      <div>
        <p className='font-bold py-auto'> {name}</p>
        <p className='font-semibold py-auto' >{comment}</p>

      </div>

    </div>
  )
}

const CommentList = ({ comment }) => {
  return (
    <div>
      {
        comment?.map((comment, index) => { < Comment key = { index }  data = { comment } /> })
      }

    </div>
  )

}
function CommentsContainer() {
  return (
    <div>
      <h1 className='m-2 p-2 text-2xl font-bold'> Comments : </h1>
      <CommentList data={commentData} />
    </div>
  )
}

export default CommentsContainer