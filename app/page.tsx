import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      
      <section className="home-section">
        <CompanionCard 
          id="123"
          name="Codix the Logic Builder"
          topic="Programming Basics"
          subject="Coding"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard 
          id="456"
          name="Atomix and Quest for Matter"
          topic="Introduction to atoms, forces, and physics"
          subject="Science"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard 
          id="789"
          name="Calcumo the Number Ninja"
          topic="The magic of numbers, patterns, and puzzles"
          subject="Maths"
          duration={30}
          color="#bde7ff"
        />
      </section>

      <section className="home-section">
        <CompanionsList 
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page