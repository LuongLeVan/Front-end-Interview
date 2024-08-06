import React from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'

import { TodoList } from '@/client/components/TodoList'

import * as Tabs from '@radix-ui/react-tabs'

import { useState } from 'react'

type TodoStatus = 'all' | 'pending' | 'completed';

const Index = () => {
  const [selectedStatus, setSelectedStatus] = useState<TodoStatus>('all')

  const handleTabChange = (value: any) => {
    setSelectedStatus(value);
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root
          defaultValue="all"
          orientation="vertical"
          className="my-8"
          activationMode="automatic"
          onValueChange={handleTabChange}
        >
          <Tabs.List aria-label="tabs example">
            <Tabs.Trigger 
              value="all" 
              className={`w-[66px] h-[44px] px-6 gap-2 rounded-full border border-solid border-current opacity-1 ${selectedStatus === 'all' ? 'bg-[#334155] text-white' : ''}`}
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="pending" 
              className={`mx-3 w-[104px] h-[44px] px-6 gap-2 rounded-full border border-solid border-current opacity-1 ${selectedStatus === 'pending' ? 'bg-[#334155] text-white' : ''}`}
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="completed" 
              className={`w-[124px] h-[44px] px-6 gap-2 rounded-full border border-solid border-current opacity-1 ${selectedStatus === 'completed' ? 'bg-[#334155] text-white' : ''}`}
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
        <div className="pt-2">
          <TodoList status={selectedStatus} />
        </div>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
