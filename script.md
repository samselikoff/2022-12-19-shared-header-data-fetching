# Script

# Todo

- turn into syn

## Next 12

Want to add dynamic data to our header

Next 12 lets us fetch data easily right in our page with getServerSideProps


```jsx
export async function getServerSideProps() {
  const user = await getUser();

  return { props: { user } };
}
```

Now go to layout in _app, and we have the data in pageProps. So we can pass the user's name into Header

```jsx
<Header name={pageProps.user.name} />
```

and update our Header:

```jsx
export default function Header({ name }: { name: string }) {
  return <span className="text-gray-400">Welcome, {name}!</span>
}
```

Great! Dynamic data in our header. But when we click About... it breaks.

So the downside to adding data requirements to our shared Header component is that we’ve introduced implicit coupling between every page, and the Header component. IOW we’re gonna forget to add this every time we make a new page!

Now let's see how Server Components solve this in Next 13.

## Next 13

```jsx
<span className="text-gray-400">Welcome, {user.name}!</span>
```