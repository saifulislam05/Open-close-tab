const faqs = document.querySelectorAll('.faq h1');

faqs.forEach(faqe => {
    faqe.addEventListener('click', () => {
        if (faqe.parentElement.classList.contains('active')) faqe.parentElement.classList.remove('active')
        else {
            faqs.forEach(faqss => {
                faqss.parentElement.classList.remove('active')
            });
            faqe.parentElement.classList.add('active')

        }

    });

});















// faqs.forEach(faqe => {
//     faqe.addEventListener('click', () => {
//         if (faqe.classList.contains('active')) faqe.classList.remove('active')
//         else {
//             faqs.forEach(faqss => {
//                 faqss.classList.remove('active')
//             });
//             faqe.classList.add('active')

//         }

//     });

// });