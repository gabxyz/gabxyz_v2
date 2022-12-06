import React, { useState, useEffect } from 'react'
import UnstyledLink from 'components/Button/UnstyledLink'

type Location = {
  city: string
  country: string
}

const LastVisit: React.FC = () => {
  const [location, setLocation] = useState<Location | null>(null)

  useEffect(() => {
    // Fetch the visitor's location using the ipapi service
    fetch('https://ipapi.co/json')
      .then((response) => response.json())
      .then((data: { city: string; country_name: string }) => {
        setLocation({
          city: data.city,
          country: data.country_name
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      {location ? (
        <p>
          last visit from{' '}
          <UnstyledLink
            href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
              location.city
            )}`}
            className="ml-px font-bold hover:text-mauve-12 motion-safe:duration-150 motion-safe:ease-productive-standard"
          >
            {location.city}, {location.country}.
          </UnstyledLink>
        </p>
      ) : (
        <p>loading last visit information...</p>
      )}
    </div>
  )
}

export default LastVisit
