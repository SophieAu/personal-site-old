---
title: "Using Enums Instead of Booleans to Define States"
date: 2020-10-25
updated: 2020-10-25
categories: javascript
slug: "state-enum-vs-boolean"
draft: false
---

Chances are, you're doing a lot of data fetching in your app. Which means that quite often you will have code that looks something like this:

```ts
const FetchComponent: React.FC = () => {
  const [isIdle, setIdle] = useState(true);
  const [data, setData] = useState<RequestData>();
  const [isLoadng, setLoading] = useState(false);
  const [error, setError] = useState<RequestError>();

  const handleClick = async () => {
    setIdle(false);
    setLoading(true);

    try {
      const response = await fetchData(REQUEST);
      setData(await response.json());
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {isIdle && <button onClick={handleClick}>Fetch</button>}
      {isLoadng && <Spinner />}
      {!!error && <ErrorView error={error} />}
      {!!data && <SuccessView data={data} />}
    </div>
  );
};
```

It does it's job, but all the state variables are excusive to each other i.e. if there's an error, there's no data and the component isn't idle or loading. ut since all the states are decoupled from another this is just asking for an accidentally introduced bug.

To prevent that, let's use an enum like this:

```ts
enum State {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  COMPLETED = 'COMPLETED',
}
const { IDLE, LOADING, ERROR, COMPLETED } = State;

const FetchComponent: React.FC = () => {
  const [state, setState] = useState<State>(IDLE);
  const [data, setData] = useState<RequestData>();
  const [error, setError] = useState<RequestError>();

  const handleClick = async () => {
    setState(LOADING);

    try {
      const response = await fetchData(REQUEST);
      setData(await response.json());
      setState(COMPLETED);
    } catch (e) {
      setError(e);
      setState(ERROR);
    }
  };

  return (
    <div>
      {state === IDLE && <button onClick={handleClick}>Fetch</button>}
      {state === LOADING && <Spinner />}
      {state === ERROR && <ErrorView error={error} />}
      {state === COMPLETED && <SuccessView data={data} />}
    </div>
  );
};
```


This feels a lot cleaner to me and avoids any accidental state overlaps.