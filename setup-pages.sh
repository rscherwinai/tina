# Create main page directories
mkdir -p app/keynote-speaking
mkdir -p app/thought-leadership
mkdir -p app/schedule

# Create offerings directory and subdirectories
mkdir -p app/offerings
mkdir -p app/offerings/go-to-market-audit
mkdir -p app/offerings/message-audit
mkdir -p app/offerings/messaging-positioning
mkdir -p app/offerings/tam
mkdir -p app/offerings/go-to-market-leadership
mkdir -p app/offerings/coaching

# Create page files
touch app/keynote-speaking/page.tsx
touch app/thought-leadership/page.tsx
touch app/schedule/page.tsx
touch app/offerings/page.tsx
touch app/offerings/go-to-market-audit/page.tsx
touch app/offerings/message-audit/page.tsx
touch app/offerings/messaging-positioning/page.tsx
touch app/offerings/tam/page.tsx
touch app/offerings/go-to-market-leadership/page.tsx
touch app/offerings/coaching/page.tsx

# Create a components directory for page-specific components (optional but recommended)
mkdir -p components/keynote-speaking
mkdir -p components/offerings
mkdir -p components/thought-leadership
mkdir -p components/schedule

echo "Directory structure and files created successfully!"