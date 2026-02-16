/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting
      - `email` (text) - Email address
      - `subject` (text) - Subject line of the message
      - `message` (text) - The actual message content
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the submission (new, read, archived)
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow anyone to insert contact submissions
    - Add policy for admins to read all submissions (for future admin panel)
    
  3. Notes
    - Public can only insert, not read their own submissions
    - This prevents exposing contact data to frontend users
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users cannot read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (false);
