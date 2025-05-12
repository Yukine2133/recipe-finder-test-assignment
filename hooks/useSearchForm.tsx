import React from 'react'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function useSearchForm() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [maxReadyTime, setMaxReadyTime] = useState<number | undefined>(undefined)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    // Enable the Next button only when at least one field is filled
    setIsFormValid(!!query || !!cuisine || !!maxReadyTime)
  }, [query, cuisine, maxReadyTime])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build query parameters
    const params = new URLSearchParams()
    if (query) params.append('query', query)
    if (cuisine) params.append('cuisine', cuisine)
    if (maxReadyTime) params.append('maxReadyTime', maxReadyTime.toString())

    // Navigate to recipes page with query parameters
    router.push(`/recipes?${params.toString()}`)
  }
  return {
    query,
    cuisine,
    maxReadyTime,
    isFormValid,
    setQuery,
    setCuisine,
    setMaxReadyTime,
    handleSubmit,
  }
}
