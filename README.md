# 🗓️ GPT-Powered Day Scheduler

**Turn your to-do list into a personalized, AI-optimized weekly plan—hour by hour.**

This React app leverages OpenAI’s GPT API to analyze your list of tasks and automatically generate a balanced, realistic schedule for your day or week. It splits up long tasks, clusters similar work, and builds in downtime—so you avoid burnout and maximize focus. The result? A schedule you can *actually* stick to.

## ✨ Features

- **AI-Driven Planning:**  
  GPT prioritizes and sequences tasks for maximum productivity and sustainability (minimizing burnout, maximizing flow)
- **Smart Task Splitting:**  
  Breaks large projects into manageable chunks, allocating time across multiple days
- **Contextual Grouping:**  
  Batches related or location-based tasks together for efficiency
- **Customizable Timeframes:**  
  Works for one day, several days, or your entire week
- **Real-World Constraints:**  
  Built-in awareness of context-switch cost, lunch, breaks, and downtime

## 🚀 Quick Start

1. **Clone the repo:**  
   `git clone https://github.com/YOUR_USERNAME/your-scheduler-repo.git`
2. **Install dependencies:**  
   `npm install`
3. **Set your OpenAI API key:**  
   - Copy `.env.example` to `.env` and add your key:  
     `REACT_APP_OPENAI_API_KEY=sk-...`
4. **Start the app:**  
   `npm start`
5. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- React (frontend)
- OpenAI GPT API (scheduling logic)
- Custom algorithms for batching, splitting, and downtime allocation

## 🤔 Why?

Most to-do lists are *aspirational*. This app is practical—using real AI to produce a schedule that works for *humans* with energy limits, interruptions, and real life.  
It’s like having your own productivity coach and time-blocking assistant, available 24/7.

## 📝 License

MIT

*Ready to stop over-planning and start getting things done? Let GPT handle your day. Try it out!*

