'use client';

import RemoveButton from './RemoveButton';
import { HiPencilAlt } from 'react-icons/hi';
import { ITopic } from '@models/topic';
import { useRouter } from 'next/navigation';

interface TopicParams {
  topic: ITopic;
}

export default function Topic({ topic }: TopicParams) {
  const router = useRouter();

  const onDelete = async () => {
    try {
      await fetch(`/api/topics/${topic._id.toString()}`, {
        method: 'delete',
      });

      router.refresh();
    } catch (err) {
      console.error('Could not delete topic: ', err);
    }
  };

  return (
    <div className='p-4 border border-slate-300 my-3 flex justify-between rounded'>
      <div className='flex flex-col gap-3'>
        <header>
          <h2 className='font-semibold text-2xl'>{topic.title}</h2>
          <label className='text-xs'>
            Last updated at{' '}
            {new Date(topic.updatedAt.toString()).toDateString()}
          </label>
        </header>
        <div
          className='text-slate-400'
          dangerouslySetInnerHTML={{
            __html: topic.description
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/\n/g, '<br />'),
          }}
        />
      </div>
      <div className='flex gap-2 items-start'>
        <RemoveButton onDelete={onDelete} />
        <a
          href={`/edit-topic/${topic._id.toString()}`}
          className='text-slate-800'
        >
          <HiPencilAlt size={24} />
        </a>
      </div>
    </div>
  );
}
