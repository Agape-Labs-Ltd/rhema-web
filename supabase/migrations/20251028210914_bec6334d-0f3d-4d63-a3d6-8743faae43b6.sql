-- Create leads table for email capture
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  high_score INTEGER NOT NULL DEFAULT 0
);

-- Enable RLS on leads table
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert/update their own lead
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update leads by email" 
ON public.leads 
FOR UPDATE 
USING (true);

-- Create leaderboard table for hourly scores
CREATE TABLE public.leaderboard (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  score INTEGER NOT NULL
);

-- Enable RLS on leaderboard table
ALTER TABLE public.leaderboard ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert scores
CREATE POLICY "Anyone can insert scores" 
ON public.leaderboard 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow anyone to read leaderboard
CREATE POLICY "Anyone can read leaderboard" 
ON public.leaderboard 
FOR SELECT 
USING (true);

-- Create index for faster hourly leaderboard queries
CREATE INDEX idx_leaderboard_created_at ON public.leaderboard(created_at DESC);
CREATE INDEX idx_leaderboard_score ON public.leaderboard(score DESC);