1. **AsyncTask:**

`AsyncTask` is a class provided by Android that allows you to perform background operations and update the UI thread with the results. It simplifies the process of handling asynchronous tasks in Android by providing convenient methods for executing code in the background and updating the UI. The three generic types used in `AsyncTask` are `Params`, `Progress`, and `Result`, which represent the types of parameters passed to the task, the type of progress units published during the task's execution, and the result returned by the task.

Here's an example of using `AsyncTask` to fetch data from a network API and update the UI with the results:

```java
public class NetworkTask extends AsyncTask<Void, Void, String> {

    @Override
    protected String doInBackground(Void... params) {
        // Perform network operation (e.g., API call) in the background
        // Return the result to onPostExecute
        return fetchDataFromAPI();
    }

    @Override
    protected void onPostExecute(String result) {
        // Update the UI with the fetched data
        textView.setText(result);
    }
}

// To execute the task:
new NetworkTask().execute();
```

In this example, `doInBackground()` method performs the network operation in the background, while `onPostExecute()` runs on the UI thread and updates the UI with the fetched data.

2. **Handler:**

`Handler` is a class that allows you to schedule and handle messages and runnable objects to be executed on a specific thread. It is often used for communication between background threads and the UI thread in Android. `Handler` allows you to post messages or runnables to the message queue of a thread and process them at a later time.

Here's an example of using `Handler` to update a UI element periodically:

```java
private Handler handler = new Handler();
private Runnable runnable = new Runnable() {
    @Override
    public void run() {
        // Update UI element here
        updateUI();
        // Schedule the next update after a delay
        handler.postDelayed(this, 1000); // 1 second delay
    }
};

// To start the periodic updates:
handler.post(runnable);

// To stop the periodic updates:
handler.removeCallbacks(runnable);
```

In this example, `run()` method is executed periodically every 1 second, updating a UI element. The `postDelayed()` method is used to schedule the next update after a specific delay, and `removeCallbacks()` is used to stop the periodic updates.

3. **ThreadPoolExecutor:**

`ThreadPoolExecutor` is a class that provides an efficient way to manage and execute multiple threads in a pool. It is a more flexible alternative to using raw threads directly. `ThreadPoolExecutor` allows you to control the maximum number of threads, handle task scheduling, and manage thread lifecycle.

Here's an example of using `ThreadPoolExecutor` to execute multiple tasks concurrently:

```java
int corePoolSize = 2; //max 2 core
int maximumPoolSize = 4; //max 4 thread
long keepAliveTime = 60L; // 60 seconds
TimeUnit unit = TimeUnit.SECONDS;
BlockingQueue<Runnable> workQueue = new LinkedBlockingQueue<>();
ThreadFactory threadFactory = Executors.defaultThreadFactory();
RejectedExecutionHandler handler = new ThreadPoolExecutor.AbortPolicy();

ThreadPoolExecutor executor = new ThreadPoolExecutor(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, threadFactory, handler);

// Submit tasks to the executor
executor.submit(new Task1());
executor.submit(new Task2());
executor.submit(new Task3());

// Shutdown the executor when no more tasks need to be submitted
executor.shutdown();
```

In this example, `ThreadPoolExecutor` is created with 2 core threads and 4 maximum threads. Tasks are submitted using the `submit()` method, and the executor is shut down using the `shutdown()` method when no more tasks are expected.

These are some of the commonly used concurrency-related classes in Android development. Each of them serves a different purpose and can be used in various scenarios depending on your requirements.