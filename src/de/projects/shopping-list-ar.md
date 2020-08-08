---
layout: layouts/post.njk
title: ShoppingList AR
teaser: Augmented reality shopping list prototype
date: 2014-03-05
tags: ["project", "study", "hiwi"]
technologies:
    - Android
    - Vuforia SDK
---
<div class="figure-container">

<figure >
      <a href="{{ '/assets/projects/shopping-list-ar/app.png' | url }}" >
          <img src="{{ '/assets/projects/shopping-list-ar/app.png' | url }}" alt="List overview" />
      </a>
      <figcaption >List overview</figcaption>
    </figure>
<figure >
      <a href="{{ '/assets/projects/shopping-list-ar/list.png' | url }}" >
          <img src="{{ '/assets/projects/shopping-list-ar/list.png' | url }}" alt="Shopping" />
      </a>
      <figcaption >Shopping</figcaption>
    </figure>
<figure>
      <a href="{{ '/assets/projects/shopping-list-ar/scan.png' | url }}" >
          <img src="{{ '/assets/projects/shopping-list-ar/scan.png' | url }}" alt="Scanning" />
      </a>
      <figcaption >Scanning</figcaption>
    </figure>
</div>


<p>Dieser Prototype wurde für das <a href="http://www.innovative-retail.de/" target="_blank">IRL (Innovative Retail Laboratory)</a> entwickelt welches Ansätze und Lösungen für den Supermarkt der Zukunft entwickelt.</p>
<p>Mit der für Android entwickelten App ist es möglich Einkaufslisten zu generieren und Produkte für einen Einkauf zu speichern. Dies funktioniert, wie herkömmlicih über das Eintippen der Informationen, wie Name, Preis und Anzahl. Der Clou besteht im Augmentet Reality Part, der es erlaubt, dass die Produkte auch über die Kamera eingelesen werden können. Dazu filmt der Benuzter das dreidimensionale Produkt ab und wartet bis es von der App erkannt wurde. Mit Angeben der Anzahl, wird das Produkt in seiner Einkaufsliste gespeichert. Momentan gibt es leider noch keine zentralen Datenbanken, mit Informationen zu den Produkten (Name, Preis, Bilder), sodass diese erst aufwendig aufgebaut werden müsste.</p>

<iframe height="500" width="700" src="//www.youtube.com/embed/800kc342IsY" frameborder="0" allowfullscreen></iframe>
