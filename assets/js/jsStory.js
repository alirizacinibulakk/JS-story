let question = prompt("Gece yarısı evde yalnızsın. Telefonun çalıyor. Ne yaparsın?\nA: Telefona cevap ver\nB: Telefonu görmezden gel ve ışıkları kapat");

if (question === "A" || question === "a") {
  question = prompt("Telefonda bir fısıltı duyuyorsun: 'Hemen evden çık.' Ne yaparsın?\nA: Kapıya koş\nB: Pencereden bak");

  if (question === "A" || question === "a") {
    question = prompt("Karanlık bir sokakta gölge geçti. Ne yaparsın?\nA: Sokakta koş\nB: Saklan");

    if (question === "A" || question === "a") {
      question = prompt("İleride bir figür var. Ne yaparsın?\nA: Ona doğru koş\nB: Başka bir yöne git");

      if (question === "A" || question === "a") {
        question = prompt("Figüre doğru koştun, ama o hızla sana yaklaşıyor. Ne yaparsın?\nA: Saldır\nB: Kaç");

        if (question === "A" || question === "a") {
          alert("Figüre saldırdın, ancak figür bir anda yere düştü. O kişi, senin uzun zamandır kayıp olan arkadaşın çıktı! 'Bu sadece bir şakaydı!' diyor. Rahatladın ve güldün. Hikaye sona erdi.");
        } else if (question === "B" || question === "b") {
          alert("Kaçmaya çalıştın, ancak figür seni yakaladı. Figür aslında tehlikeli bir adamdı ve ne yazık ki seni öldürdü. Hikaye burada trajik bir şekilde sona erdi.");
        }

      } else if (question === "B" || question === "b") {
        alert("Başka bir yöne saptın, ancak karanlık seni yuttu. Polisler seni daha sonra baygın halde buldu, ama gizemli adam iz bırakmadan kayboldu. Hikaye sona erdi.");
      }

    } else if (question === "B" || question === "b") {
      question = prompt("Ayak sesleri duyuyorsun. Ne yaparsın?\nA: Sessizce bekle\nB: Kaç");

      if (question === "A" || question === "a") {
        alert("Ayak sesleri geçti, ama korkunç bir figür kapının önünde beliriyor. O kişi, yıllardır aranan tehlikeli bir katil! Polisler aniden olay yerine gelip onu yakalıyor. Artık güvendesin. Hikaye mutlu bir şekilde sona erdi.");
      } else if (question === "B" || question === "b") {
        alert("Kaçmaya çalıştın, ama yere düştün ve figür seni yakaladı. Sonunu getiremediğin bir kaçış oldu. Hikaye sona erdi.");
      }
    }

  } else if (question === "B" || question === "b") {
    question = prompt("Pencerede bir el izi görüyorsun. Ne yaparsın?\nA: Polisi ara\nB: Tekrar camdan bak");

    if (question === "A" || question === "a") {
      alert("Polisi aradın, ancak figür çoktan içeri girmişti. Tam her şey bitti sanarken polisler yetişip gizemli adamı tutukladılar. Şanslıydın! Hikaye mutlu bir şekilde sona erdi.");
    } else if (question === "B" || question === "b") {
      alert("El izi kayboldu, ama dışarıda bir şey var. Gizemli figür camdan içeri giriyor, seni şaşırtacak şekilde eski arkadaşın çıkıyor ve 'Sadece bir şakaydı!' diyor. Rahatladın ve güldün. Hikaye sona erdi.");
    }
  }

} else if (question === "B" || question === "b") {
  question = prompt("Evde garip sesler duymaya başladın. Üst kattaki odadan bir kapı yavaşça açılıyor. Ne yaparsın?\nA: Yukarı çıkıp bak\nB: Hemen dışarı koş");

  if (question === "A" || question === "a") {
    question = prompt("Kapıyı açmaya çalışıyorsun, ama içeriden tıkırtılar geliyor. Ne yaparsın?\nA: Kapıyı aç\nB: Geri kaç");

    if (question === "A" || question === "a") {
      alert("Kapıyı açtığında karşında seni bekleyen bir adam var. O kişi, seni takip eden gizemli adamdı ve kaçman artık imkansız. Seni yakaladı. Hikaye sona erdi.");
    } else if (question === "B" || question === "b") {
      alert("Geri kaçtın ve evden dışarı çıktın. Tam dışarıda rahatlayacaktın ki, polisler gelip gizemli adamı yakaladılar. Artık güvendesin. Hikaye mutlu bir şekilde sona erdi.");
    }

  } else if (question === "B" || question === "b") {
    question = prompt("Karanlık sokakta bir silüet belirdi. Ne yaparsın?\nA: Silüete doğru yürümeye başla\nB: Sislerin içinde saklanmaya çalış");

    if (question === "A" || question === "a") {
      alert("Silüet sana yaklaşıyor ve karşına çıkıyor. O kişi, eski arkadaşın çıktı! 'Bu sadece bir şakaydı' diyor ve gülüyor. Derin bir nefes aldın ve hikaye mutlu bir şekilde sona erdi.");
    } else if (question === "B" || question === "b") {
      alert("Sislerin içinde kaybolmaya çalışıyorsun, ama bir duvara çarptın. Gizemli figür seni buldu ve ne yazık ki kurtulamadın. Hikaye sona erdi.");
    }
  }

} else {
  alert("Geçerli bir seçim yapmadın. Hikaye sona erdi.");
}
