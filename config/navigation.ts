export type MenuItem = {
  title: string
  path: string
  description?: string
}

export type NavigationItem = {
  label: string
  path?: string
  type: 'link' | 'dropdown' | 'button'
  items?: MenuItem[]
  className?: string
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
    type: "link",
    className: "text-sm font-medium text-gray-700 hover:text-[#4052B5]"
  },
  {
    label: "Keynote Speaking",
    path: "/keynote-speaking",
    type: "link",
    className: "text-sm font-medium text-gray-700 hover:text-[#4052B5]"
  },
  {
    label: "Offerings",
    type: "dropdown",
    items: [
      {
        title: "Go-To-Market Audit",
        path: "/offerings/go-to-market-audit",
        description: "Assess your go-to-market strategy and capabilities"
      },
      {
        title: "Message Audit",
        path: "/offerings/message-audit",
        description: "Assess your messaging and positioning"
      },
      {
        title: "Messaging: Devise Strategic Narrative",
        path: "/offerings/messaging-positioning",
        description: "Craft compelling narratives that resonate"
      },
      {
        title: "TAM: Create and Implement",
        path: "/offerings/tam",
        description: "Identify and target your ideal customers"
      },
      {
        title: "Fractional Go-To-Market Leadership",
        path: "/offerings/go-to-market-leadership",
        description: "Receive personalized guidance and support"
      },
      {
        title: "Coaching",
        path: "/offerings/coaching",
        description: "Receive personalized guidance and support"
      }
    ]
  },
 
 /* {
    label: "Thought Leadership",
    type: "dropdown",
    items: [
      {
        title: "Article 1",
        path: "/thought-leadership/article-1",
        description: "Thought leadership article 1"
      },
      {
        title: "Article 2",
        path: "/thought-leadership/article-2",
        description: "Thought leadership article 2"
      }]
  },

*/
  {
    label: "Thought Leadership",
    path: "/thought-leadership",
    type: "link",
    className: "text-sm font-medium text-gray-700 hover:text-[#4052B5]"
  },
  {
    label: "Schedule Time With Us",
    path: "/schedule",
    type: "button",
    className: "bg-brand-primary hover:bg-brand-primary-hover text-white"
  }
] 