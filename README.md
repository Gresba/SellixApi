# Project Overview

## Project Name

SellixStore

## Project Description

The project will be used for viewing and purchasing different products. The products will be hosted on [sellix](https://sellix.io/) which contains it's own backend. The product description, image, price, title and stock will be all pulled using a GET request to the /products endpoint for sellix.

## API and Data Sample

Api Root Url: `https://dev.sellix.io/v1`

End Point: `GET /products`

Api Key: Passed in as a header using Authorization
```
{
    "status": 200,
    "data": {
        "products": [
            {
                "id": 672194,
                "uniqid": "62b5c1ac6ea96",
                "shop_id": 244435,
                "type": "SERIALS",
                "subtype": null,
                "title": "Visa Gift Card",
                "currency": "USD",
                "price": 25,
                "price_display": 25,
                "price_discount": 0,
                "description": "A visa gift card.",
                "image_attachment": "",
                "file_attachment": "",
                "youtube_link": null,
                "volume_discounts": [],
                "recurring_interval": "DAY",
                "recurring_interval_count": 7,
                "trial_period": 0,
                "paypal_product_id": null,
                "paypal_plan_id": null,
                "stripe_price_id": null,
                "quantity_min": 1,
                "quantity_max": -1,
                "quantity_warning": 0,
                "gateways": [
                    ""
                ],
                "custom_fields": [],
                "crypto_confirmations_needed": 0,
                "max_risk_level": 85,
                "block_vpn_proxies": false,
                "delivery_text": "",
                "delivery_time": null,
                "service_text": "",
                "stock_delimiter": ",",
                "stock": 0,
                "dynamic_webhook": "",
                "sort_priority": 1,
                "unlisted": false,
                "on_hold": 0,
                "terms_of_service": "",
                "warranty": 0,
                "warranty_text": "",
                "watermark_enabled": 0,
                "watermark_text": "",
                "redirect_link": null,
                "private": false,
                "created_at": 1656078764,
                "updated_at": 0,
                "updated_by": 0,
                "marketplace_category_id": 0,
                "image_name": null,
                "image_storage": null,
                "cloudflare_image_id": null,
                "product_attachments": null
            }
        ]
    },
    "message": null,
    "log": null,
    "error": null,
    "env": "production"
}
```

## Wireframes

wireframe.jpeg

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- Load products from Sellix Api
- Search products on page
- Create a cool front-end

#### PostMVP  
- Hide API Key

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Lay out the days you anticipate hitting your major milestones. Below is a suggested schedlue. Feel free to adjust it.

|  Day | Deliverable | Status
|---|---| ---|
|June 25| Test API and grabbing data. Working on HTML and CSS. | Incomplete
|June 26-27| Finish HTML and CSS | Incomplete
|June 28| Presentations | Incomplete

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

Searches for a product on the dom

```
function search(event) {
  let searchTerm = event.target.value;
  console.log(searchTerm)
  let products = document.querySelectorAll(".product-div");
  products.forEach((product) => {
    const title = product.dataset.title;
    if (title.length === 0)
      product.style.display = "block";
    else if (!title.includes(searchTerm))
      product.style.display = "none";
    else
      product.style.display = "block";
  })
}
```
