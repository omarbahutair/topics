import Link from 'next/link';
import RemoveButton from './RemoveButton';
import { HiPencilAlt } from 'react-icons/hi';
import { ITopic } from '@models/topic';

interface TopicParams {
  topic: ITopic;
}

export default function Topic({ topic }: TopicParams) {
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
        <div className='text-slate-400'>{topic.description}</div>
      </div>
      <div className='flex gap-2 items-start'>
        <RemoveButton />
        <Link href='/edit-topic/123' className='text-slate-800'>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
}