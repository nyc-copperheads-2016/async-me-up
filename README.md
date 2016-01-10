Usual trick - clone and cd into repo then  python -m SimpleHTTPServer

look at the page on http://localhost:8000
Enter a movie name and click find
You should see the cast in the page.

When you are returning deferreds, you HAVE TO keep using "then" to get at the values. You can't just use the return directly.

This won't work:

```
var cast = movieSearch('titanic');
var first actor = cast[0];
```

You have to do something like

```
var deferred = movieSearch('titanic');
deferred.then(function(cast){
  var first actor = cast[0];
});
```

