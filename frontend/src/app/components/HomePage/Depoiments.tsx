'use client';
import { useState } from 'react';

type Depoiment = {
  id: number;
  user: string;
  content: string;
};

export default function Depoiments() {
  const [comments, setComments] = useState<Depoiment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [user, setUser] = useState('');
  const [disableCommends, setDisableCommends] = useState(false)

  const addComment = () => {
    if (newComment.trim() !== '') {
      const newDepoiment: Depoiment = {
        id: comments.length + 1,
        user: user,
        content: newComment,
      };
      setDisableCommends(true)
      setComments([...comments, newDepoiment]);
      setNewComment('');
      
    }
  };
  return (
    <div>
      <div className="flex flex-wrap justify-center mt-4">
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            className={`w-full sm:w-1/2 px-4 ${
              index % 2 === 0 ? 'lg:w-2/5' : 'lg:w-2/5 lg:pl-4'
            } mb-4`}
          >
            <div className="p-4 bg-th-background border-2 border-th-primary rounded">
              <p>{comment.user}:</p>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    {disableCommends ? 
      <div className="flex justify-center">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 px-4">
          <label htmlFor="comment-input" className="block mb-2 text-sm font-medium">
            Deixe sua recomendação:
          </label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Digite seu nome"
            className="block p-4 bg-white rounded-md text-black w-3/5"
          />
          <input
            type="textarea"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            id="comment-input"
            placeholder="Escreva sua recomendação"
            className="block w-3/5 p-4 bg-white rounded-md text-black mt-2"
          />
        </div>
      </div> : null
      }
      <div className="flex justify-center mt-2 px-4">
        <button onClick={addComment} className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/6 bg-th-primary text-white mr-10 rounded-md">
          Adicionar Recomendação
        </button>
      </div>
    </div>
  );
}
