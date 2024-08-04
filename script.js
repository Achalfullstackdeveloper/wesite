
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});


    document.addEventListener('DOMContentLoaded', function () {
      const filterButtons = document.querySelectorAll('.filter-btn');
      const products = document.querySelectorAll('#product-gallery .col');

      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');

          products.forEach(product => {
            if (filter === 'all' || product.getAttribute('data-category') === filter) {
              product.style.display = '';
            } else {
              product.style.display = 'none';
            }
          });

          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
        });
      });
    });
 
      


  const languageToggle = document.getElementById('languageToggle');
  const elements = document.querySelectorAll('[data-translate]');
  let currentLanguage = 'en';

  const translations = {

    en: {
      'brand': 'Satynam Industries and Traders',
      'discover': 'Discover Nature\'s Golden Nuggets',
      'premium': 'Premium Quality Peanuts',
      'fresh': 'Farm-Fresh and Nutritious',
      'support': 'Supporting Local Farmers',
      'explore': 'Explore Our Peanut Paradise',
      'home': 'Home',
      'about-us': 'About Us',
      'products': 'Products',
      'order': 'Order',
      'contact-us': 'Contact Us',
      'best-peanut-sale': 'Best Peanut and Nut Sale',
      'peanuts-healthy-treat': 'Peanuts Are A Healthy Treat That Is High In Protein, Fiber, And Heart-Healthy Nutrients.',
      'peanut-rich-fiber': 'Peanut Rich In Fiber',
      'raw-peanuts-fiber': 'Raw Peanuts Are Also An Excellent Source Of Dietary Fiber.',
      'peanut-varieties': 'Varieties Of Peanuts And Nuts',
      'peanut-protein': 'A Single One-Ounce Serving Of Raw Peanuts Provides A Whopping Seven Grams Of Protein.',
      'previous': 'Previous',
      'next': 'Next',
      'our-products': 'Our Products',
      'peanuts': 'Peanuts',
      'flour': 'Flour',
      'peanut-oil': 'Peanut Oil',
      'all': 'All',
      'white-peanuts': 'White Peanuts',
      'peanuts': 'Peanuts',
      'ground-nut': 'Ground Nut',
      'red-peanut': 'Red Peanuts',
      'wheat-flour': 'Wheat Flour',
      'beasn-flour': 'Besan Flour',
      'peant-oil': 'Peanut Oil',
      'order': 'ORDER',
      'white-peanuts': 'White Peanuts',
      'order': 'ORDER',
      'order': 'Order',
      'place-order': 'Place Your Order',
      'name': 'Name',
      'phone': 'Phone',
      'address': 'Address',
      'order-details': 'Order Details',
      'close': 'Close',
      'carousel-text': 'Use Roasted Peanuts To Make Your Favorite Trail Mix At Home, Or For Pure, Unadulterated, Nutty Snacking!',
      'shop-now': 'Shop now',
      'about-us-title': 'ABOUT US',
      'commitment-title': 'Our Commitment to Quality',
      'commitment-text-1': 'At our company, we pride ourselves on offering the highest quality peanuts and nut-based products. Our journey began with a passion for nutritious and delicious snacks, and we continue to uphold these values in everything we do.',
      'commitment-text-2': 'Using only the finest ingredients, we ensure that every product meets our rigorous standards. Join us in celebrating the taste and health benefits of premium peanuts.',
      'learn-more': 'Learn More',
      'contact-us': 'Contact Us',
      'benefits-title': 'Peanuts: Small Legumes, Big Benefits',
      'improve-heart-health': 'Improve Heart And Health',
      'improve-heart-health-text': 'Peanut reduces the risk of cardiovascular disease by 21% compared to the average diet, whereas a low-fat diet reduced the risk by only 12%. The fat in peanuts comes from the Protein.',
      'protein-powerhouse': 'Protein Powerhouse',
      'protein-powerhouse-text': 'A single one-ounce serving of raw peanuts provides a whopping seven grams of protein. The perfect post-workout snack, peanuts supply the protein your muscles need to repair.',
      'high-fiber': 'High In Fiber',

      'high-fiber-text': 'Peanuts excellent source of dietary fiber; they pack four grams of fiber per serving, soluble and insoluble. Soluble fiber helps control blood sugar levels while insoluble fiber supports the digestive system.',
      'get-in-touch-title': 'GET IN TOUCH',
      'address-title': 'Address',
      'address-link': '8FVH+F36, Bharsingi, Maharashtra 441305',
      'phone-title': 'Phone',
      'phone-link': '+919167589330',
      'email-title': 'Email',
      'email-link': 'satynam@123.gmail.com',
      'footer-description': 'Your trusted partner in quality products. Our commitment is to deliver the best to our customers.',
      'quick-links': 'Quick Links',
      'home': 'Home',
      'about-us': 'About Us',
      'services': 'Services',
      'contact': 'Contact',
      'contact-us': 'Contact Us',
      'address-link': '8FVH+F36,Rohana, Maharashtra 441305',
      'phone': '+123 456 789',
      'email': 'satynam@gmail.com',
      'follow-us': 'Follow Us',
      'copyright': ' Satynam Industries and Traders. All Rights Reserved.',
      'gallery':'Gallery'
    },
    hi: {
      'brand': 'सत्यनम इंडस्ट्रीज एंड ट्रेडर्स',
      'discover': 'प्रकृति के सुनहरे टुकड़े खोजें',
      'premium': 'उच्च गुणवत्ता वाली मूंगफली',
      'fresh': 'खेत से ताजा और पौष्टिक',
      'support': 'स्थानीय किसानों का समर्थन',
      'explore': 'हमारे मूंगफली स्वर्ग का अन्वेषण करें',
      'home': 'होम',
      'about-us': 'हमारे बारे में',
      'products': 'उत्पाद',
      'order': 'ऑर्डर करें',
      'contact-us': 'संपर्क करें',
      'best-peanut-sale': 'सर्वोत्तम मूंगफली और नट बिक्री',
      'peanuts-healthy-treat': 'मूंगफली एक स्वस्थ व्यंजन है जो प्रोटीन, फाइबर और हृदय के लिए स्वस्थ पोषक तत्वों से भरपूर होता है।',
      'peanut-rich-fiber': 'फाइबर से भरपूर मूंगफली',
      'raw-peanuts-fiber': 'कच्ची मूंगफली आहार फाइबर का भी एक उत्कृष्ट स्रोत है।',
      'peanut-varieties': 'मूंगफली और नट्स की विविधताएँ',
      'peanut-protein': 'कच्ची मूंगफली की एक औंस सेवा में लगभग सात ग्राम प्रोटीन होता है।',
      'previous': 'पिछला',
      'next': 'अगला',
      'our-products': 'हमारे उत्पाद',
      'peanuts': 'मूंगफली',
      'flour': 'आटा',
      'peanut-oil': 'मूंगफली का तेल',
      'all': 'सभी',
      'white-peanuts': 'सफेद मूंगफली',
      'peanuts': 'मूंगफली',
      'ground-nut': 'भूमिगत अखरोट',
      'red-peanut': 'लाल मूंगफली',
      'wheat-flour': 'गेहूं का आटा',
      'beasn-flour': 'बेसन का आटा',
      'peant-oil': 'मूंगफली का तेल',
      'order': 'आदेश',
      'white-peanuts': 'सफेद मूंगफली',
      'order': 'ऑर्डर करें',
      'place-order': 'अपना ऑर्डर दें',
      'name': 'नाम',
      'phone': 'फोन',
      'address': 'पता',
      'order-details': 'ऑर्डर विवरण',
      'close': 'बंद करें',
      'carousel-text': 'घर पर अपने पसंदीदा ट्रेल मिक्स बनाने के लिए भुनी हुई मूंगफली का उपयोग करें, या शुद्ध, बिना मिलावट वाले, नट्टी स्नैकिंग के लिए!',
      'shop-now': 'अभी खरीदें',
      'about-us-title': 'हमारे बारे में',
      'commitment-title': 'गुणवत्ता के प्रति हमारी प्रतिबद्धता',
      'commitment-text-1': 'हमारी कंपनी में, हम उच्च गुणवत्ता वाली मूँगफली और नट आधारित उत्पादों की पेशकश पर गर्व करते हैं। हमारी यात्रा एक पौष्टिक और स्वादिष्ट स्नैक्स के प्रति जुनून के साथ शुरू हुई, और हम इन मूल्यों को हर चीज़ में बनाए रखते हैं।',
      'commitment-text-2': 'केवल सबसे अच्छे सामग्री का उपयोग करके, हम सुनिश्चित करते हैं कि हर उत्पाद हमारी कड़ी मानकों को पूरा करता है। प्रीमियम मूँगफली के स्वाद और स्वास्थ्य लाभों का जश्न मनाने के लिए हमारे साथ जुड़ें।',
      'learn-more': 'अधिक जानें',
      'contact-us': 'हमसे संपर्क करें',
      'benefits-title': 'मूँगफली: छोटे बीन्स, बड़े लाभ',
      'improve-heart-health': 'दिल और स्वास्थ्य में सुधार',
      'improve-heart-health-text': 'मूँगफली औसत आहार की तुलना में हृदय रोग के जोखिम को 21% तक कम कर देती है, जबकि एक कम वसा वाला आहार केवल 12% जोखिम को कम करता है। मूँगफली में वसा प्रोटीन से आता है।',
      'protein-powerhouse': 'प्रोटीन का पावरहाउस',
      'protein-powerhouse-text': 'कच्ची मूँगफली का एक आउंस का भाग सात ग्राम प्रोटीन प्रदान करता है। आदर्श पोस्ट-वर्कआउट स्नैक, मूँगफली आपके मांसपेशियों को मरम्मत के लिए प्रोटीन प्रदान करता है।',
      'high-fiber': 'फाइबर में उच्च',
      'high-fiber-text': 'मूँगफली आहार फाइबर का उत्कृष्ट स्रोत है; वे एक भाग में चार ग्राम फाइबर पैक करते हैं, घुलनशील और अवघुलनशील। घुलनशील फाइबर रक्त शर्करा स्तर को नियंत्रित करने में मदद करता है जबकि अवघुलनशील फाइबर पाचन तंत्र का समर्थन करता है।',
      'get-in-touch-title': 'संपर्क करें',
      'address-title': 'पता',
      'address-link': '8FVH+F36, भसिंगी, महाराष्ट्र 441305',
      'phone-title': 'फोन',
      'phone-link': '+919167589330',
      'email-title': 'ईमेल',
      'email-link': 'satynam@123.gmail.com',
      'footer-description': 'आपका गुणवत्ता उत्पादों में विश्वसनीय भागीदार। हमारी प्रतिबद्धता अपने ग्राहकों को सबसे अच्छा प्रदान करने की है।',
      'quick-links': 'त्वरित लिंक',
      'home': 'होम',
      'about-us': 'हमारे बारे में',
      'services': 'सेवाएँ',
      'contact': 'संपर्क',
      'contact-us': 'संपर्क करें',
      'address-link': '8FVH+F36, रोहणा, महाराष्ट्र 441305',
      'phone': '+१२३ ४५६ ७८९',
      'email': 'satynam@gmail.com',
      'follow-us': 'हमें फॉलो करें',
      'copyright': 'सत्या नाम इंडस्ट्रीज और ट्रेडर्स। सर्वाधिकार सुरक्षित।',
      'gallery':'गैलरी'
    }


  };
  let currentProduct = null;

  function ORDER(event) {
    const card = event.target.closest('.card');
    const productName = card.querySelector('.card-title').textContent;
    const quantity = card.querySelector('.quantity-input').value;
    const price = card.querySelector('.price').textContent;

    currentProduct = {
      name: productName,
      quantity: quantity,
      price: price
    };

    document.getElementById('orderDetails').textContent = `${quantity}kg of ${productName} - ₹${price}`;
  }

  document.getElementById('submitOrder').addEventListener('click', function () {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;

    if (name && phone && address) {
      console.log('Order placed:', { customer: { name, phone, address }, product: currentProduct });
      alert('Thank you for your order! We will contact you shortly to confirm.');

    } else {
      alert('Please fill in all fields.');
    }
  });

  function attachEventListeners() {
    document.querySelectorAll('.quantity-input').forEach(input => {
      input.addEventListener('input', updatePrice);
    });

    document.querySelectorAll('.order-button').forEach(button => {
      button.addEventListener('click', ORDER);
    });
  }


  function translatePage() {
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[currentLanguage][key]) {
        element.textContent = translations[currentLanguage][key];
      }
    });
  }

  languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    translatePage();
  });

  // Initial translation
  translatePage();




    const products = [
      {
        name: "White Peanuts",
        price: 90,
        image: "https://5.imimg.com/data5/SH/LA/MY-37404391/roasted-peanuts-500x500.jpg",
        category: "peanuts"
      },
      {
        name: "Peanuts",
        price: 100,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58GvGHtMpLCJvMp94yaqMW70bzmwf5_l3qKpaX_tJQLRtZBUyLkZcanS4SwkWVvnZI_o&usqp=CAU",
        category: "peanuts"
      },
      {
        name: "Red Skin Peanuts",
        price: 120,
        image: "https://image.made-in-china.com/2f0j00RIYoMPlqAdbS/China-Peanut-Big-Size-Peanut-Kernel-Red-Skin-Cheap-Price-Good-Quality.webp",
        category: "peanuts"
      },
      {
        name: "Ground Nut",
        price: 80,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJmB7qPYX6kyc3dyOEfZBwvw9nxH_Z_dkzNw1lTE7XEQfJRcMzY3ga-Hh2QvqnLaiDoE&usqp=CAU",
        category: "peanuts"
      },
      {
        name: "Red Peanuts",
        price: 120,
        image: "https://static.toiimg.com/photo/103099895.cms",
        category: "peanuts"
      },
      {
        name: "Bowl Peanuts",
        price: 90,
        image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325003/peanuts-in-a-bowl-on-wooden-table-top-down-view.jpg",
        category: "peanuts"
      },
      {
        name: "Wheat Flour",
        price: 95,
        image: "https://5.imimg.com/data5/SELLER/Default/2021/7/EQ/AA/AY/6428050/5-kg-wheat-flour-500x500.jpeg",
        category: "flour"
      },
      {
        name: "Besan Flour",
        price: 150,
        image: "https://farmm2home.com/wp-content/uploads/2024/02/besan-powder-copy-scaled.jpeg",
        category: "flour"
      },
      {
        name: "Peanut Oil",
        price: 120,
        image: "https://5.imimg.com/data5/SELLER/Default/2023/12/367866050/MM/BC/KQ/22076159/groundnut-oil-packing-pouch-500x500.jpg",
        category: "oil"
      }
    ];

    document.addEventListener('DOMContentLoaded', function () {
      const filterButtons = document.querySelectorAll('.filter-btn');
      const products = document.querySelectorAll('#product-gallery .col');

      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');

          products.forEach(product => {
            const category = product.getAttribute('data-category');
            if (filter === 'all' || category === filter || (filter === 'peanuts' && category.includes('peanut'))) {
              product.style.display = '';
            } else {
              product.style.display = 'none';
            }
          });

          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
        });
      });
    });



    function createProductCard(product) {
      return `
      <div class="col product-item ${product.category}">
          <div class="card shadow-sm h-100">
              <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 250px; object-fit: cover;">
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${product.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">₹<span class="price">${product.price}</span>/-</h6>
                  <div class="mt-auto">
                      <div class="input-group mb-3">
                          <span class="input-group-text">Quantity</span>
                          <input type="number" class="form-control quantity-input" value="1" min="1">
                          <span class="input-group-text">kg</span>
                      </div>
                      <button class="btn btn-primary w-100 order-button" data-bs-toggle="modal" data-bs-target="#orderModal">ORDER</button>
                  </div>
              </div>
          </div>
      </div>
  `;
    }

    function displayProducts(category = 'all') {
      const gallery = document.getElementById('product-gallery');
      gallery.innerHTML = '';
      products.forEach(product => {
        if (category === 'all' || product.category === category) {
          gallery.innerHTML += createProductCard(product);
        }
      });
      attachEventListeners();
    }

    function updatePrice(event) {
      const quantity = event.target.value;
      const card = event.target.closest('.card');
      const priceElement = card.querySelector('.price');
      const basePrice = products.find(p => p.name === card.querySelector('.card-title').textContent).price;
      priceElement.textContent = (basePrice * quantity).toFixed(2);
    }

    function ORDER(event) {
      const card = event.target.closest('.card');
      const productName = card.querySelector('.card-title').textContent;
      const quantity = card.querySelector('.quantity-input').value;
      const price = card.querySelector('.price').textContent;

      currentProduct = {
        name: productName,
        quantity: quantity,
        price: price
      };

      document.getElementById('orderDetails').textContent = `${quantity}kg of ${productName} - ₹${price}`;
    }

    function attachEventListeners() {
      document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('input', updatePrice);
      });

      document.querySelectorAll('.order-button').forEach(button => {
        button.addEventListener('click', ORDER);
      });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        displayProducts(e.target.getAttribute('data-filter'));
      });
    });

    function displayOrderDetails(name, phone, address, product) {
      const orderDetailsElement = document.getElementById('orderDetails');
      orderDetailsElement.innerHTML = `
          <strong>Name:</strong> ${name}<br>
          <strong>Phone:</strong> ${phone}<br>
          <strong>Address:</strong> ${address}<br>
          <strong>Product:</strong> ${product.name}<br>
          <strong>Price:</strong> $${product.price}
        `;
    }

    document.getElementById('submitOrder').addEventListener('click', function () {
      const name = document.getElementById('customerName').value;
      const phone = document.getElementById('customerPhone').value;
      const address = document.getElementById('customerAddress').value;

      if (name && phone && address) {
        console.log('Order placed:', { customer: { name, phone, address }, product: currentProduct });

        // Display order details
        displayOrderDetails(name, phone, address, currentProduct);

        // Show thank you message
        alert('Thank you for your order! We will contact you shortly to confirm.');

        // Hide the modal
        const orderModal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
        orderModal.hide();

        // Clear the form fields
        document.getElementById('orderForm').reset();
      } else {
        alert('Please fill in all fields.');
      }
    });

    // Remove modal backdrop
    document.querySelector('[data-bs-dismiss="modal"]').addEventListener('click', function () {
      document.querySelector('.modal-backdrop').remove();
    });


    function displayProducts(category = 'all') {
      const gallery = document.getElementById('product-gallery');
      gallery.innerHTML = '';
      products.forEach(product => {
        if (category === 'all' || product.category === category) {
          gallery.innerHTML += createProductCard(product);
        }
      });
      attachEventListeners();
    }

    function attachEventListeners() {
      document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('input', updatePrice);
      });

      document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', ORDER);
      });
    }

    function updatePrice(event) {
      const quantity = event.target.value;
      const card = event.target.closest('.card');
      const priceElement = card.querySelector('.price');
      const basePrice = products.find(p => p.name === card.querySelector('.card-title').textContent).price;
      priceElement.textContent = (basePrice * quantity).toFixed(2);
    }


    document.addEventListener('DOMContentLoaded', () => {
      displayProducts();

      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          displayProducts(e.target.getAttribute('data-filter'));
        });
      });
    });



    document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('contactForm');

      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to a server
        console.log('Form submitted:', { name, phone, email, message });

        // Show a success message (you can replace this with a more sophisticated UI feedback)
        alert('Thank you for your message. We will get back to you soon!');


      });
    });
    document.addEventListener('DOMContentLoaded', function () {
      var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleDark'), {
        interval: 5000,
        wrap: true
      });
    });






