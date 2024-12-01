"use client"

interface CalendarWidgetProps {
  className?: string
}

export function CalendarWidget({ className }: CalendarWidgetProps) {
  return (
    <div className="w-full flex justify-center p-4">
      <iframe 
        src="https://calendarbridge.com/book/rscherwin/"
        className={`
          w-full 
          max-w-[1080px] 
          h-[700px] 
          border-none 
          ${className || ''}
        `}
        title="Schedule a meeting"
      />
    </div>
  )
} 