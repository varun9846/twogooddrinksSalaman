This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
base/_typography.scss
box-1.scss
color-1.scss
color-2.scss
color-3.scss
color-4.scss
color-5.scss
color-6.scss
color-7.scss
color-8.scss
color-9.scss
components/_cart-sidebar.scss
components/_category-popup.scss
components/_common.scss
components/_footer.scss
components/_header.scss
components/_newsletter-popup.scss
components/_quickview.scss
components/_tools-sidebar.scss
dark.scss
layouts/_banner-one.scss
layouts/_banner-two.scss
layouts/_blog-2.scss
layouts/_category.scss
layouts/_deal.scss
layouts/_hero.scss
layouts/_instagram.scss
layouts/_new-product.scss
layouts/_product.scss
layouts/_testimonials.scss
layouts/_vendors.scss
pages/_about.scss
pages/_blog.scss
pages/_cart-page.scss
pages/_checkout-page.scss
pages/_compare.scss
pages/_faq.scss
pages/_shop-page.scss
pages/_single-product-page.scss
pages/_track.scss
pages/_wishlist.scss
rtl.scss
style.scss
utilities/_mixing.scss
utilities/_variables.scss
```

# Files

## File: base/_typography.scss
```scss
/*-------------------------------------------------
  Fonts Family & Style CSS
---------------------------------------------------*/

/*--  Poppins font  --*/

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-Thin.ttf") format("truetype");
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-ThinItalic.ttf") format("truetype");
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-ExtraLight.ttf") format("truetype");
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-ExtraLightItalic.ttf") format("truetype");
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-LightItalic.ttf") format("truetype");
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: italic;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-MediumItalic.ttf") format("truetype");
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-SemiBoldItalic.ttf") format("truetype");
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-BoldItalic.ttf") format("truetype");
    font-weight: 700;
    font-style: italic;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-ExtraBold.ttf") format("truetype");
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-ExtraBoldItalic.ttf") format("truetype");
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-Black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: "Poppins, sans-serif";
    src: url("../fonts/poppins/Poppins-BlackItalic.ttf") format("truetype");
    font-weight: 900;
    font-style: italic;
}

/*--  Quicksand font  --*/

@font-face {
    font-family: "Quicksand";
    src: url("../fonts/quicksand/Quicksand-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: "Quicksand";
    src: url("../fonts/quicksand/Quicksand-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Quicksand";
    src: url("../fonts/quicksand/Quicksand-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: "Quicksand";
    src: url("../fonts/quicksand/Quicksand-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: "Quicksand";
    src: url("../fonts/quicksand/Quicksand-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
}
```

## File: box-1.scss
```scss
/* box-1 */
$radius-0: 0;

.header-search {
    .bb-btn-group-form {
        input {
            border-radius: $radius-0;
        }
    }
}

.select-options {
    border-radius: $radius-0;
}

.bb-category-img {
    .bb-offers {
        border-radius: $radius-0;
    }
}

.category-sidebar, .bb-side-cart, .qty-plus-minus, .bb-popnews-box, .bb-btn-2 {
    border-radius: $radius-0;
}

.custom-dropdown {
    ul.dropdown {
        border-radius: $radius-0;
    }
}

.section-instagram {
    .bb-title {
        border-radius: $radius-0;
    }
}

.bb-side-cart {
    .bb-cart-box {
        .bb-cart-banner {
            .banner {
                border-radius: $radius-0;
                .detail {
                    a {
                        border-radius: $radius-0;
                    }
                }
            }
        }
    }
}

.quickview-modal {
    .modal-content {
        border-radius: $radius-0;
    }
}

.input-item {
    input{
        border-radius: $radius-0;
    }
}

.bb-accordion-item {
    .accordion-head{
        border-radius: $radius-0;
    }
}

.bb-details-input{
    input, textarea{
        border-radius: $radius-0;
    }
}

.bb-login-wrap{
    input{
        border-radius: $radius-0;
    }
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            border-radius: $radius-0;
        }
        .bb-main-menu {
            ul.navbar-nav {
                .bb-mega-dropdown {
                    .bb-mega-menu {
                        border-radius: $radius-0;
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        border-radius: $radius-0;
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        border-radius: $radius-0;
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                border-radius: $radius-0;
            }
        }
    }
}

.bb-btn-1 {
    border-radius: $radius-0;
}

.bb-btn-2 {
    border-radius: $radius-0;
}

input,
textarea {
    border-radius: $radius-0;
}

.bottom-header {
    .inner-bottom-header {
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    border-radius: $radius-0;
                }
            }
        }
    }
}

.hero-slider {
    .swiper-pagination-bullet {
        border-radius: $radius-0;
    }
}

.bb-category-img {
    img {
        border-radius: $radius-0;
    }
}

.bb-category-box {
    border-radius: $radius-0;
}

.bb-category-block {
    border-radius: 0 !important;
    &:before {
        background-image: none !important;
    }
    &:after {
        background-image: none !important;
    }
}

.bb-deal {
    .dealend-timer {
        .dealend-timer {
            border-radius: $radius-0;
        }
    }
}

.bb-pro-box {
    border-radius: $radius-0;
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                border-radius: $radius-0;
            }
        }
        .inner-img {
            border-radius: $radius-0;
        }
    }
}

.width-50 {
    .bb-pro-box {
        .bb-pro-img {
            border-radius: $radius-0 !important;
            .inner-img {
                border-radius: $radius-0;
            }
        }
    }
}

.banner-box {
    border-radius: $radius-0;
}

.banner-two-box {
    border-radius: $radius-0;
    &:after {
        background-image: none !important;
    }
    &:before {
        background-image: none !important;
    }
}

.bb-services-box {
    border-radius: $radius-0;
}

ul.bb-vendors-tab-nav {
    li {
        a {
            border-radius: $radius-0;
        }
    }
}

.bb-vendors-img {
    img {
        border-radius: $radius-0;
    }
    .tab-vendors-pane{
        a{
            border-radius: $radius-0;
        }
    }
    .vendors-local-shape {
        border-radius: $radius-0 !important;
        .inner-shape {
            &:before {
                background-image: none !important;
            }
            &:after {
                background-image: none !important;
            }
        }
    }
}

.bb-cart-table {
    border-radius: $radius-0;
}

.bb-testimonials {
    .bb-testimonials-inner {
        .testimonials-image {
            img {
                border-radius: $radius-0;
            }
        }
        .testimonials-contact {
            img {
                border-radius: $radius-0;
            }
            .inner-contact {
                border-radius: $radius-0;
            }
        }
    }
    .testimonials-img-1 {
        border-radius: $radius-0;
    }
    .testimonials-img-2 {
        border-radius: $radius-0;
    }
    .testimonials-img-3 {
        border-radius: $radius-0;
    }
    .testimonials-img-4 {
        border-radius: $radius-0;
    }
    .testimonials-img-5 {
        border-radius: $radius-0;
    }
    .testimonials-img-6 {
        border-radius: $radius-0;
    }
}

.bb-pro-pagination {
    ul {
        li {
            a {
                border-radius: $radius-0;
            }
        }
    }
}

.bb-category-toggle {
    border-radius: $radius-0;
}

.bb-compare-box {
    border-radius: $radius-0;
}

.blog-2-card {
    border-radius: $radius-0;
    .blog-img {
        img {
            border-radius: $radius-0;
        }
    }
    .blog-contact {
        border-radius: $radius-0;
    }
}

.bb-instagram-card {
    .instagram-img {
        border-radius: $radius-0;
        &::before {
            border-radius: $radius-0;
        }
        img {
            border-radius: $radius-0;
        }
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .app-img {
                img {
                    border-radius: $radius-0;
                }
            }
        }
        .bb-footer-social {
            .bb-footer-widget {
                .bb-footer-links {
                    .bb-footer-link {
                        a {
                            border-radius: $radius-0;
                        }
                    }
                }
            }
        }
    }
}

.bb-tools-sidebar {
    .bb-tools-sidebar-toggle {
        border-radius: $radius-0;
    }
}

.bb-side-cart {
    .bb-cart-box {
        ul.bb-cart-items {
            li {
                border-radius: $radius-0;
                .bb-cart-pro-img {
                    img {
                        border-radius: $radius-0;
                    }
                }
            }
        }
    }
}

.bb-tags {
    ul {
        li {
            border-radius: $radius-0;
        }
    }
}

.bb-category-sidebar {
    .bb-category-cart {
        border-radius: $radius-0;
        .pro-img {
            border-radius: $radius-0;
            img {
                border-radius: $radius-0;
            }
        }
    }
}

.bb-mobile-menu {
    .bb-menu-inner {
        .bb-menu-content {
            ul {
                li {
                    a {
                        border-radius: $radius-0;
                    }
                }
            }
        }
        .header-res-social {
            ul {
                li {
                    border-radius: $radius-0;
                }
            }
        }
    }
}

.quickview-modal {
    .modal-content {
        .single-pro-img {
            border-radius: $radius-0;
        }
    }
}

.modal-content {
    border-radius: $radius-0;
}

.coupon-down-box{
    .bb-coupon{
        border-radius: $radius-0;
    }
}

.bb-pro-variation {
    ul {
        li {
            border-radius: $radius-0;
        }
    }
}

.bb-pro-list-top {
    border-radius: $radius-0;
    .bb-bl-btn {
        button.active {
            border-radius: $radius-0;
        }
    }
}

.width-100 {
    .bb-pro-box {
        .bb-pro-img {
            .inner-img {
                border-radius: $radius-0 !important;
            }
        }
    }
}

.bb-shop-wrap {
    border-radius: $radius-0;
}

.bb-color-contact {
    ul {
        li {
            .bb-sidebar-block-item {
                span {
                    border-radius: $radius-0;
                }
            }
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        border-radius: $radius-0;
    }
}

.price-range-slider {
    .range-bar {
        .ui-slider-handle {
            border-radius: $radius-0;
        }
    }
}

ul.bb-shop-tags {
    li {
        a {
            border-radius: $radius-0;
        }
    }
}

.bg-bnr-one {
    border-radius: $radius-0;
}

.bg-bnr-two {
    border-radius: $radius-0;
}

.bb-bnr-details {
    .overlay-bnr {
        border-radius: $radius-0;
    }
    .bb-image {
        img {
            border-radius: $radius-0;
        }
    }
}

.section-track {
    .track, .block-title {
        border-radius: 0;
    }
    .bb-progress {
        li {
            border-radius: 0;
        }
    }
}

.section-terms {
    .desc {
        border-radius: 0;
    }
}

.bnr-details-bg {
    border-radius: $radius-0;
}

.single-pro-slider {
    border-radius: $radius-0;
    .single-nav-thumb {
        .slick-slide {
            img {
                border-radius: $radius-0;
            }
        }
    }
    .single-product-cover {
        .zoom-image-hover {
            border-radius: $radius-0;
            img {
                border-radius: $radius-0;
            }
        }
    }
}

.price-range-slider {
    .range-value {
        input {
            border-radius: $radius-0;    
        }
    }
}

.bb-inner-tabs,
.bey-single-accordion {
    border-radius: $radius-0;
    .accordion {
        .accordion-item {
            .accordion-header {
                .accordion-button {
                    border-radius: $radius-0;
                }
            }
        }
    }
    .bb-reviews {
        .reviews-bb-box {
            .inner-image {
                img {
                    border-radius: $radius-0;
                }
            }
        }
    }
    .bb-reviews-form {
        .input-box {
            input,
            textarea {
                border-radius: $radius-0;
            }
        }
    }
}

.bb-single-pro-contact {
    .bb-single-qty {
        .bb-pro-actions {
            a {
                border-radius: $radius-0;
            }
        }
    }
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li {
                    border-radius: $radius-0;
                }
            }
        }
    }
}

.bb-vendor-rows {
    .bb-vendor-box {
        border-radius: $radius-0;
    }
}

.bb-team-box {
    .bb-team-img {
        img {
            border-radius: $radius-0;
        }
        .bb-team-socials {
            border-radius: $radius-0;
            .inner-shape {
                &:before {
                    background-image: none !important;
                }
                &:after {
                    background-image: none !important;
                }
            }
        }
    }
}

.bb-contact-maps {
    iframe {
        border-radius: $radius-0;
    }
}

.bb-contact-form {
    border-radius: $radius-0;
    .bb-contact-wrap {
        input,
        textarea {
            border-radius: $radius-0;
        }
    }
}

.bb-cart-table {
    table {
        tbody {
            .Product-cart {
                img {
                    border-radius: $radius-0;
                }
            }
        }
    }
}

.bb-cart-sidebar-block {
    border-radius: $radius-0;
    .bb-sb-blok-contact {
        .input-box {
            input {
                border-radius: $radius-0;
            }
            .custom-select {
                border-radius: $radius-0;
            }
        }
    }
}

.bb-checkout-contact {
    border-radius: $radius-0;
    .input-box-form {
        .input-item {
            .custom-select {
                border-radius: $radius-0;
            }
        }
    }
}

.bb-checkout-sidebar {
    .checkout-items {
        border-radius: $radius-0;
    }
    .about-order {
        textarea {
            border-radius: $radius-0;
        }
    }
    .bb-checkout-pro {
        .pro-items {
            border-radius: $radius-0;
            .image {
                img {
                    border-radius: $radius-0;
                }
            }
        }
    }
}

.bb-faq-contact {
    .accordion-item {
        .accordion-button {
            border-radius: $radius-0 !important;
        }
    }
}

.bb-faq-img {
    img {
        border-radius: $radius-0;
    }
}

.bb-login-contact {
    border-radius: $radius-0;
}

.bb-register {
    border-radius: $radius-0;
}

.bb-register form {
    .bb-register-wrap {
        input,
        .custom-select {
            border-radius: $radius-0;
        }
    }
}

.bb-blog-card {
    border-radius: $radius-0;
    .blog-image {
        img {
            border-radius: $radius-0;
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        border-radius: $radius-0;
        .blog-sidebar-card {
            border-radius: $radius-0;
            .inner-image {
                border-radius: $radius-0;
                img {
                    border-radius: $radius-0;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .inner-blog-details-image {
        img {
            border-radius: $radius-0;
        }
    }
    .inner-blog-details-contact {
        .blog-inner-image {
            img {
                border-radius: $radius-0;
            }
        }
    }
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-image {
                img {
                    border-radius: $radius-0;
                }
            }
        }
    }
}
```

## File: color-1.scss
```scss
/* color-1 */
@import "utilities/_variables";

.bb-header-btn {
    .header-icon {
        svg {
            path {
                fill: $color-1;
            }
        }
    }
}

[type="radio"] {
    &:checked {
        + label {
            &:before {
                border-color: $color-1;
            }
            &:after {
                background-color: $color-1;
            }
        }
    }
}

.hero-contact {
    h1,
    h2 {
        span {
            color: $color-1;
        }
    }
}
.select-options {
    li {
        &:hover {
            color: $color-1;
        }
    }
}
::selection {
    color: $color-1;
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            svg {
                path {
                    fill: $color-1;
                }
            }
        }
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    &:hover {
                        a.nav-link {
                            color: $color-1;
                            &:after {
                                border-color: $color-1;
                            }
                        }
                    }
                    a {
                        svg {
                            path {
                                fill: $color-1;
                            }
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        .menu_title {
                            a {
                                color: $color-1;
                            }
                        }
                        li {
                            a {
                                &:hover {
                                    color: $color-1;
                                }
                            }
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            a {
                                &:hover {
                                    color: $color-1;
                                }
                            }
                            &:hover {
                                > a {
                                    color: $color-1;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                svg {
                    path {
                        fill: $color-1;
                    }
                }
            }
        }
    }
}

.bb-compare {
    .bb-remove-compare {
        i {
            &:hover {
                color: $color-1;
            }
        }
    }
}
.top-header {
    .inner-top-header {
        .col-right-bar {
            .cols {
                .dropdown {
                    a {
                        &:hover {
                            color: $color-1;
                        }
                    }
                }
            }
        }
    }
}
.bottom-header {
    .inner-bottom-header {
        .bb-sidebar-toggle {
            svg {
                path {
                    fill: $color-1;
                }
            }
        }
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    li {
                        a {
                            &:hover {
                                color: $color-1;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-toggle-menu {
    .header-icon {
        i {
            color: $color-1;
        }
    }
}

.section-hero {
    .bb-social-follow {
        ul.inner-links {
            li {
                a {
                    &:hover {
                        color: $color-1;
                    }
                }
            }
        }
    }
}

.hero-contact {
    h2 {
        span {
            color: $color-1;
        }
    }
}

.section-title {
    .section-detail {
        h2 {
            span {
                color: $color-1;
            }
        }
    }
}

.bb-btn-1 {
    &:hover {
        background: $color-1;
        border-color: $color-1;
    }
}

.bb-pro-box {
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                &:hover {
                    background-color: $color-1;
                    border-color: $color-1;
                }
            }
        }
    }
    .bb-pro-contact {
        .bb-price {
            .inner-price {
                .item-left {
                    color: $color-1;
                }
            }
        }
        h4.bb-pro-title {
            a {
                &:hover {
                    color: $color-1;
                }
            }
        }
    }
}

.bb-pro-variation {
    ul {
        li.active {
            background-color: $color-1 !important;
            border-color: $color-1 !important;
        }
    }
}

.banner-two-box {
    span {
        color: $color-1;
    }
}

.bb-btn-2 {
    background-color: $color-1;
    border-color: $color-1;
}

.hero-slider {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $color-1;
    }
}

ul#ProTab {
    li.active {
        a {
            color: $color-1;
        }
    }
}

ul.bb-vendors-tab-nav {
    li {
        a.active {
            border-color: $color-1;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-1;
                    }
                }
            }
        }
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .bb-footer-links {
                .bb-footer-link {
                    color: $color-1;
                    span {
                        i {
                            color: $color-1;
                        }
                    }
                    a {
                        &:hover {
                            color: $color-1;
                        }
                    }
                }
            }
        }
        .bb-footer-social {
            .bb-footer-widget {
                .bb-footer-links {
                    .bb-footer-link {
                        a {
                            &:hover {
                                background-color: $color-1;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-directory {
        .directory-contact {
            .inner-contact {
                ul {
                    li {
                        a {
                            &:hover {
                                color: $color-1;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-tags {
    ul {
        li {
            &:hover {
                background-color: $color-1;
            }
        }
    }
}

.footer-bottom {
    .bb-copy {
        a {
            color: $color-1;
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        &:after {
            border-color: $color-1;
            background-color: $color-1;
        }
    }
}

.bb-pro-list-top {
    .bb-bl-btn {
        button.active {
            background-color: $color-1;
        }
    }
}

.price-range-slider {
    .range-bar {
        .ui-slider-range {
            background: $color-1;
        }
        .ui-slider-handle + span {
            background: $color-1;
        }
        .ui-slider-handle {
            border-color: $color-1;
        }
    }
}

.bb-single-pro-contact {
    .bb-single-rating {
        .bb-read-review {
            a {
                color: $color-1;
            }
        }
    }
    .bb-single-price-wrap {
        .bb-single-price {
            .stock {
                span {
                    color: $color-1;
                }
            }
            .price {
                h5 {
                    span {
                        color: $color-1;
                    }
                }
            }
        }
    }
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li.active-variation {
                    background-color: $color-1;
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                &:hover {
                    background-color: $color-1;
                }
            }
        }
    }
}

.single-pro-slider {
    .single-nav-thumb {
        .slick-slide {
            &:hover {
                img {
                    border-color: $color-1;
                }
            }
        }
        .slick-slide.slick-current.slick-active {
            img {
                border-color: $color-1;
            }
        }
    }
}

.bb-team-box {
    .bb-team-img {
        .bb-team-socials {
            ul {
                li {
                    a {
                        i {
                            &:hover {
                                color: $color-1;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        .blog-sidebar-card {
            .blog-sidebar-contact {
                span {
                    color: $color-1;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                .bb-details-btn {
                    color: $color-1;
                    i {
                        color: $color-1;
                    }
                }
            }
        }
    }
}

.bb-wishlist {
    .bb-pro-img {
        .bb-remove-wish {
            i {
                &:hover {
                    color: $color-1;
                }
            }
        }
    }
}

a.back-to-top {
    color: $color-1;
    border-color: $color-1;
    svg {
        path {
            stroke: $color-1;
        }
    }
}

ul.bb-shop-tags {
    li.active-tags {
        a {
            color: $color-1;
            border-color: $color-1;
        }
    }
    li {
        a {
            &:hover {
                color: $color-1;
                border-color: $color-1;
            }
        }
    }
}

ul#ProductTab {
    li.active {
        a {
            color: $color-1;
        }
    }
}

ul#vendorstab {
    li.active {
        a {
            border-color: $color-1;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-1;
                    }
                }
            }
        }
    }
}
```

## File: color-2.scss
```scss
/* color-2 */
@import "utilities/_variables";

.bb-header-btn {
    .header-icon {
        svg {
            path {
                fill: $color-2;
            }
        }
    }
}

[type="radio"] {
    &:checked {
        + label {
            &:before {
                border-color: $color-2;
            }
            &:after {
                background-color: $color-2;
            }
        }
    }
}

.hero-contact {
    h1,
    h2 {
        span {
            color: $color-2;
        }
    }
}
.select-options {
    li {
        &:hover {
            color: $color-2;
        }
    }
}
::selection {
    color: $color-2;
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            svg {
                path {
                    fill: $color-2;
                }
            }
        }
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    &:hover {
                        a.nav-link {
                            color: $color-2;
                            &:after {
                                border-color: $color-2;
                            }
                        }
                    }
                    a {
                        svg {
                            path {
                                fill: $color-2;
                            }
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        .menu_title {
                            a {
                                color: $color-2;
                            }
                        }
                        li {
                            a {
                                &:hover {
                                    color: $color-2;
                                }
                            }
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            a {
                                &:hover {
                                    color: $color-2;
                                }
                            }
                            &:hover {
                                > a {
                                    color: $color-2;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                svg {
                    path {
                        fill: $color-2;
                    }
                }
            }
        }
    }
}

.bb-compare {
    .bb-remove-compare {
        i {
            &:hover {
                color: $color-2;
            }
        }
    }
}
.top-header {
    .inner-top-header {
        .col-right-bar {
            .cols {
                .dropdown {
                    a {
                        &:hover {
                            color: $color-2;
                        }
                    }
                }
            }
        }
    }
}
.bottom-header {
    .inner-bottom-header {
        .bb-sidebar-toggle {
            svg {
                path {
                    fill: $color-2;
                }
            }
        }
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    li {
                        a {
                            &:hover {
                                color: $color-2;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-toggle-menu {
    .header-icon {
        i {
            color: $color-2;
        }
    }
}

.section-hero {
    .bb-social-follow {
        ul.inner-links {
            li {
                a {
                    &:hover {
                        color: $color-2;
                    }
                }
            }
        }
    }
}

.hero-contact {
    h2 {
        span {
            color: $color-2;
        }
    }
}

.section-title {
    .section-detail {
        h2 {
            span {
                color: $color-2;
            }
        }
    }
}

.bb-btn-1 {
    &:hover {
        background: $color-2;
        border-color: $color-2;
    }
}

.bb-pro-box {
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                &:hover {
                    background-color: $color-2;
                    border-color: $color-2;
                }
            }
        }
    }
    .bb-pro-contact {
        .bb-price {
            .inner-price {
                .item-left {
                    color: $color-2;
                }
            }
        }
        h4.bb-pro-title {
            a {
                &:hover {
                    color: $color-2;
                }
            }
        }
    }
}

.bb-pro-variation {
    ul {
        li.active {
            background-color: $color-2 !important;
            border-color: $color-2 !important;
        }
    }
}

.banner-two-box {
    span {
        color: $color-2;
    }
}

.bb-btn-2 {
    background-color: $color-2;
    border-color: $color-2;
}

.hero-slider {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $color-2;
    }
}

ul#ProTab {
    li.active {
        a{
            color: $color-2;
        }
    }
}

ul.bb-vendors-tab-nav {
    li {
        a.active {
            border-color: $color-2;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-2;
                    }
                }
            }
        }
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .bb-footer-links {
                .bb-footer-link {
                    color: $color-2;
                    span {
                        i {
                            color: $color-2;
                        }
                    }
                    a {
                        &:hover {
                            color: $color-2;
                        }
                    }
                }
            }
        }
        .bb-footer-social {
            .bb-footer-widget {
                .bb-footer-links {
                    .bb-footer-link {
                        a {
                            &:hover {
                                background-color: $color-2;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-directory {
        .directory-contact {
            .inner-contact {
                ul {
                    li {
                        a {
                            &:hover {
                                color: $color-2;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-tags {
    ul {
        li {
            &:hover {
                background-color: $color-2;
            }
        }
    }
}

.footer-bottom {
    .bb-copy {
        a {
            color: $color-2;
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        &:after {
            border-color: $color-2;
            background-color: $color-2;
        }
    }
}

.bb-pro-list-top {
    .bb-bl-btn {
        button.active {
            background-color: $color-2;
        }
    }
}

.price-range-slider {
    .range-bar {
        .ui-slider-range {
            background: $color-2;
        }
        .ui-slider-handle + span {
            background: $color-2;
        }
        .ui-slider-handle {
            border-color: $color-2;
        }
    }
}

.bb-single-pro-contact {
    .bb-single-rating {
        .bb-read-review {
            a {
                color: $color-2;
            }
        }
    }
    .bb-single-price-wrap {
        .bb-single-price {
            .stock {
                span {
                    color: $color-2;
                }
            }
            .price {
                h5 {
                    span {
                        color: $color-2;
                    }
                }
            }
        }
    }
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li.active-variation {
                    background-color: $color-2;
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                &:hover {
                    background-color: $color-2;
                }
            }
        }
    }
}

.single-pro-slider {
    .single-nav-thumb {
        .slick-slide {
            &:hover {
                img {
                    border-color: $color-2;
                }
            }
        }
        .slick-slide.slick-current.slick-active {
            img {
                border-color: $color-2;
            }
        }
    }
}

.bb-team-box {
    .bb-team-img {
        .bb-team-socials {
            ul {
                li {
                    a {
                        i {
                            &:hover {
                                color: $color-2;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        .blog-sidebar-card {
            .blog-sidebar-contact {
                span {
                    color: $color-2;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                .bb-details-btn {
                    color: $color-2;
                    i {
                        color: $color-2;
                    }
                }
            }
        }
    }
}

.bb-wishlist {
    .bb-pro-img {
        .bb-remove-wish {
            i {
                &:hover {
                    color: $color-2;
                }
            }
        }
    }
}

a.back-to-top {
    color: $color-2;
    border-color: $color-2;
    svg {
        path {
            stroke: $color-2;
        }
    }
}

ul.bb-shop-tags {
    li.active-tags {
        a {
            color: $color-2;
            border-color: $color-2;
        }
    }
    li {
        a {
            &:hover {
                color: $color-2;
                border-color: $color-2;
            }
        }
    }
}

ul#ProductTab {
    li.active {
        a {
            color: $color-2;
        }
    }
}

ul#vendorstab {
    li.active {
        a {
            border-color: $color-2;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-2;
                    }
                }
            }
        }
    }
}
```

## File: color-3.scss
```scss
/* color-3 */
@import "utilities/_variables";

.bb-header-btn {
    .header-icon {
        svg {
            path {
                fill: $color-3;
            }
        }
    }
}

[type="radio"] {
    &:checked {
        + label {
            &:before {
                border-color: $color-3;
            }
            &:after {
                background-color: $color-3;
            }
        }
    }
}

.hero-contact {
    h1,
    h2 {
        span {
            color: $color-3;
        }
    }
}
.select-options {
    li {
        &:hover {
            color: $color-3;
        }
    }
}
::selection {
    color: $color-3;
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            svg {
                path {
                    fill: $color-3;
                }
            }
        }
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    &:hover {
                        a.nav-link {
                            color: $color-3;
                            &:after {
                                border-color: $color-3;
                            }
                        }
                    }
                    a {
                        svg {
                            path {
                                fill: $color-3;
                            }
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        .menu_title {
                            a {
                                color: $color-3;
                            }
                        }
                        li {
                            a {
                                &:hover {
                                    color: $color-3;
                                }
                            }
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            a {
                                &:hover {
                                    color: $color-3;
                                }
                            }
                            &:hover {
                                > a {
                                    color: $color-3;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                svg {
                    path {
                        fill: $color-3;
                    }
                }
            }
        }
    }
}

.bb-compare {
    .bb-remove-compare {
        i {
            &:hover {
                color: $color-3;
            }
        }
    }
}
.top-header {
    .inner-top-header {
        .col-right-bar {
            .cols {
                .dropdown {
                    a {
                        &:hover {
                            color: $color-3;
                        }
                    }
                }
            }
        }
    }
}
.bottom-header {
    .inner-bottom-header {
        .bb-sidebar-toggle {
            svg {
                path {
                    fill: $color-3;
                }
            }
        }
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    li {
                        a {
                            &:hover {
                                color: $color-3;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-toggle-menu {
    .header-icon {
        i {
            color: $color-3;
        }
    }
}

.section-hero {
    .bb-social-follow {
        ul.inner-links {
            li {
                a {
                    &:hover {
                        color: $color-3;
                    }
                }
            }
        }
    }
}

.hero-contact {
    h2 {
        span {
            color: $color-3;
        }
    }
}

.section-title {
    .section-detail {
        h2 {
            span {
                color: $color-3;
            }
        }
    }
}

.bb-btn-1 {
    &:hover {
        background: $color-3;
        border-color: $color-3;
    }
}

.bb-pro-box {
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                &:hover {
                    background-color: $color-3;
                    border-color: $color-3;
                }
            }
        }
    }
    .bb-pro-contact {
        .bb-price {
            .inner-price {
                .item-left {
                    color: $color-3;
                }
            }
        }
        h4.bb-pro-title {
            a {
                &:hover {
                    color: $color-3;
                }
            }
        }
    }
}

.bb-pro-variation {
    ul {
        li.active {
            background-color: $color-3 !important;
            border-color: $color-3 !important;
        }
    }
}

.banner-two-box {
    span {
        color: $color-3;
    }
}

.bb-btn-2 {
    background-color: $color-3;
    border-color: $color-3;
}

.hero-slider {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $color-3;
    }
}

ul#ProTab {
    li.active {
        a{
            color: $color-3;
        }
    }
}

ul.bb-vendors-tab-nav {
    li {
        a.active {
            border-color: $color-3;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-3;
                    }
                }
            }
        }
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .bb-footer-links {
                .bb-footer-link {
                    color: $color-3;
                    span {
                        i {
                            color: $color-3;
                        }
                    }
                    a {
                        &:hover {
                            color: $color-3;
                        }
                    }
                }
            }
        }
        .bb-footer-social {
            .bb-footer-widget {
                .bb-footer-links {
                    .bb-footer-link {
                        a {
                            &:hover {
                                background-color: $color-3;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-directory {
        .directory-contact {
            .inner-contact {
                ul {
                    li {
                        a {
                            &:hover {
                                color: $color-3;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-tags {
    ul {
        li {
            &:hover {
                background-color: $color-3;
            }
        }
    }
}

.footer-bottom {
    .bb-copy {
        a {
            color: $color-3;
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        &:after {
            border-color: $color-3;
            background-color: $color-3;
        }
    }
}

.bb-pro-list-top {
    .bb-bl-btn {
        button.active {
            background-color: $color-3;
        }
    }
}

.price-range-slider {
    .range-bar {
        .ui-slider-range {
            background: $color-3;
        }
        .ui-slider-handle + span {
            background: $color-3;
        }
        .ui-slider-handle {
            border-color: $color-3;
        }
    }
}

.bb-single-pro-contact {
    .bb-single-rating {
        .bb-read-review {
            a {
                color: $color-3;
            }
        }
    }
    .bb-single-price-wrap {
        .bb-single-price {
            .stock {
                span {
                    color: $color-3;
                }
            }
            .price {
                h5 {
                    span {
                        color: $color-3;
                    }
                }
            }
        }
    }
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li.active-variation {
                    background-color: $color-3;
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                &:hover {
                    background-color: $color-3;
                }
            }
        }
    }
}

.single-pro-slider {
    .single-nav-thumb {
        .slick-slide {
            &:hover {
                img {
                    border-color: $color-3;
                }
            }
        }
        .slick-slide.slick-current.slick-active {
            img {
                border-color: $color-3;
            }
        }
    }
}

.bb-team-box {
    .bb-team-img {
        .bb-team-socials {
            ul {
                li {
                    a {
                        i {
                            &:hover {
                                color: $color-3;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        .blog-sidebar-card {
            .blog-sidebar-contact {
                span {
                    color: $color-3;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                .bb-details-btn {
                    color: $color-3;
                    i {
                        color: $color-3;
                    }
                }
            }
        }
    }
}

.bb-wishlist {
    .bb-pro-img {
        .bb-remove-wish {
            i {
                &:hover {
                    color: $color-3;
                }
            }
        }
    }
}

a.back-to-top {
    color: $color-3;
    border-color: $color-3;
    svg {
        path {
            stroke: $color-3;
        }
    }
}

ul.bb-shop-tags {
    li.active-tags {
        a {
            color: $color-3;
            border-color: $color-3;
        }
    }
    li {
        a {
            &:hover {
                color: $color-3;
                border-color: $color-3;
            }
        }
    }
}

ul#ProductTab {
    li.active {
        a {
            color: $color-3;
        }
    }
}

ul#vendorstab {
    li.active {
        a {
            border-color: $color-3;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-3;
                    }
                }
            }
        }
    }
}
```

## File: color-4.scss
```scss
/* color-4 */
@import "utilities/_variables";

.bb-header-btn {
    .header-icon {
        svg {
            path {
                fill: $color-4;
            }
        }
    }
}

[type="radio"] {
    &:checked {
        + label {
            &:before {
                border-color: $color-4;
            }
            &:after {
                background-color: $color-4;
            }
        }
    }
}

.hero-contact {
    h1,
    h2 {
        span {
            color: $color-4;
        }
    }
}
.select-options {
    li {
        &:hover {
            color: $color-4;
        }
    }
}
::selection {
    color: $color-4;
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            svg {
                path {
                    fill: $color-4;
                }
            }
        }
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    &:hover {
                        a.nav-link {
                            color: $color-4;
                            &:after {
                                border-color: $color-4;
                            }
                        }
                    }
                    a {
                        svg {
                            path {
                                fill: $color-4;
                            }
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        .menu_title {
                            a {
                                color: $color-4;
                            }
                        }
                        li {
                            a {
                                &:hover {
                                    color: $color-4;
                                }
                            }
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            a {
                                &:hover {
                                    color: $color-4;
                                }
                            }
                            &:hover {
                                > a {
                                    color: $color-4;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                svg {
                    path {
                        fill: $color-4;
                    }
                }
            }
        }
    }
}

.bb-compare {
    .bb-remove-compare {
        i {
            &:hover {
                color: $color-4;
            }
        }
    }
}
.top-header {
    .inner-top-header {
        .col-right-bar {
            .cols {
                .dropdown {
                    a {
                        &:hover {
                            color: $color-4;
                        }
                    }
                }
            }
        }
    }
}
.bottom-header {
    .inner-bottom-header {
        .bb-sidebar-toggle {
            svg {
                path {
                    fill: $color-4;
                }
            }
        }
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    li {
                        a {
                            &:hover {
                                color: $color-4;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-toggle-menu {
    .header-icon {
        i {
            color: $color-4;
        }
    }
}

.section-hero {
    .bb-social-follow {
        ul.inner-links {
            li {
                a {
                    &:hover {
                        color: $color-4;
                    }
                }
            }
        }
    }
}

.hero-contact {
    h2 {
        span {
            color: $color-4;
        }
    }
}

.section-title {
    .section-detail {
        h2 {
            span {
                color: $color-4;
            }
        }
    }
}

.bb-btn-1 {
    &:hover {
        background: $color-4;
        border-color: $color-4;
    }
}

.bb-pro-box {
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                &:hover {
                    background-color: $color-4;
                    border-color: $color-4;
                }
            }
        }
    }
    .bb-pro-contact {
        .bb-price {
            .inner-price {
                .item-left {
                    color: $color-4;
                }
            }
        }
        h4.bb-pro-title {
            a {
                &:hover {
                    color: $color-4;
                }
            }
        }
    }
}

.bb-pro-variation {
    ul {
        li.active {
            background-color: $color-4 !important;
            border-color: $color-4 !important;
        }
    }
}

.banner-two-box {
    span {
        color: $color-4;
    }
}

.bb-btn-2 {
    background-color: $color-4;
    border-color: $color-4;
}

.hero-slider {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $color-4;
    }
}

ul#ProTab {
    li.active {
        a{
            color: $color-4;
        }
    }
}

ul.bb-vendors-tab-nav {
    li {
        a.active {
            border-color: $color-4;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-4;
                    }
                }
            }
        }
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .bb-footer-links {
                .bb-footer-link {
                    color: $color-4;
                    span {
                        i {
                            color: $color-4;
                        }
                    }
                    a {
                        &:hover {
                            color: $color-4;
                        }
                    }
                }
            }
        }
        .bb-footer-social {
            .bb-footer-widget {
                .bb-footer-links {
                    .bb-footer-link {
                        a {
                            &:hover {
                                background-color: $color-4;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-directory {
        .directory-contact {
            .inner-contact {
                ul {
                    li {
                        a {
                            &:hover {
                                color: $color-4;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-tags {
    ul {
        li {
            &:hover {
                background-color: $color-4;
            }
        }
    }
}

.footer-bottom {
    .bb-copy {
        a {
            color: $color-4;
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        &:after {
            border-color: $color-4;
            background-color: $color-4;
        }
    }
}

.bb-pro-list-top {
    .bb-bl-btn {
        button.active {
            background-color: $color-4;
        }
    }
}

.price-range-slider {
    .range-bar {
        .ui-slider-range {
            background: $color-4;
        }
        .ui-slider-handle + span {
            background: $color-4;
        }
        .ui-slider-handle {
            border-color: $color-4;
        }
    }
}

.bb-single-pro-contact {
    .bb-single-rating {
        .bb-read-review {
            a {
                color: $color-4;
            }
        }
    }
    .bb-single-price-wrap {
        .bb-single-price {
            .stock {
                span {
                    color: $color-4;
                }
            }
            .price {
                h5 {
                    span {
                        color: $color-4;
                    }
                }
            }
        }
    }
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li.active-variation {
                    background-color: $color-4;
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                &:hover {
                    background-color: $color-4;
                }
            }
        }
    }
}

.single-pro-slider {
    .single-nav-thumb {
        .slick-slide {
            &:hover {
                img {
                    border-color: $color-4;
                }
            }
        }
        .slick-slide.slick-current.slick-active {
            img {
                border-color: $color-4;
            }
        }
    }
}

.bb-team-box {
    .bb-team-img {
        .bb-team-socials {
            ul {
                li {
                    a {
                        i {
                            &:hover {
                                color: $color-4;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        .blog-sidebar-card {
            .blog-sidebar-contact {
                span {
                    color: $color-4;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                .bb-details-btn {
                    color: $color-4;
                    i {
                        color: $color-4;
                    }
                }
            }
        }
    }
}

.bb-wishlist {
    .bb-pro-img {
        .bb-remove-wish {
            i {
                &:hover {
                    color: $color-4;
                }
            }
        }
    }
}

a.back-to-top {
    color: $color-4;
    border-color: $color-4;
    svg {
        path {
            stroke: $color-4;
        }
    }
}

ul.bb-shop-tags {
    li.active-tags {
        a {
            color: $color-4;
            border-color: $color-4;
        }
    }
    li {
        a {
            &:hover {
                color: $color-4;
                border-color: $color-4;
            }
        }
    }
}

ul#ProductTab {
    li.active {
        a {
            color: $color-4;
        }
    }
}

ul#vendorstab {
    li.active {
        a {
            border-color: $color-4;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-4;
                    }
                }
            }
        }
    }
}
```

## File: color-5.scss
```scss
/* color-5 */
@import "utilities/_variables";

.bb-header-btn {
    .header-icon {
        svg {
            path {
                fill: $color-5;
            }
        }
    }
}

[type="radio"] {
    &:checked {
        + label {
            &:before {
                border-color: $color-5;
            }
            &:after {
                background-color: $color-5;
            }
        }
    }
}

.hero-contact {
    h1,
    h2 {
        span {
            color: $color-5;
        }
    }
}
.select-options {
    li {
        &:hover {
            color: $color-5;
        }
    }
}
::selection {
    color: $color-5;
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            svg {
                path {
                    fill: $color-5;
                }
            }
        }
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    &:hover {
                        a.nav-link {
                            color: $color-5;
                            &:after {
                                border-color: $color-5;
                            }
                        }
                    }
                    a {
                        svg {
                            path {
                                fill: $color-5;
                            }
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        .menu_title {
                            a {
                                color: $color-5;
                            }
                        }
                        li {
                            a {
                                &:hover {
                                    color: $color-5;
                                }
                            }
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            a {
                                &:hover {
                                    color: $color-5;
                                }
                            }
                            &:hover {
                                > a {
                                    color: $color-5;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                svg {
                    path {
                        fill: $color-5;
                    }
                }
            }
        }
    }
}

.bb-compare {
    .bb-remove-compare {
        i {
            &:hover {
                color: $color-5;
            }
        }
    }
}
.top-header {
    .inner-top-header {
        .col-right-bar {
            .cols {
                .dropdown {
                    a {
                        &:hover {
                            color: $color-5;
                        }
                    }
                }
            }
        }
    }
}
.bottom-header {
    .inner-bottom-header {
        .bb-sidebar-toggle {
            svg {
                path {
                    fill: $color-5;
                }
            }
        }
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    li {
                        a {
                            &:hover {
                                color: $color-5;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-toggle-menu {
    .header-icon {
        i {
            color: $color-5;
        }
    }
}

.section-hero {
    .bb-social-follow {
        ul.inner-links {
            li {
                a {
                    &:hover {
                        color: $color-5;
                    }
                }
            }
        }
    }
}

.hero-contact {
    h2 {
        span {
            color: $color-5;
        }
    }
}

.section-title {
    .section-detail {
        h2 {
            span {
                color: $color-5;
            }
        }
    }
}

.bb-btn-1 {
    &:hover {
        background: $color-5;
        border-color: $color-5;
    }
}

.bb-pro-box {
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                &:hover {
                    background-color: $color-5;
                    border-color: $color-5;
                }
            }
        }
    }
    .bb-pro-contact {
        .bb-price {
            .inner-price {
                .item-left {
                    color: $color-5;
                }
            }
        }
        h4.bb-pro-title {
            a {
                &:hover {
                    color: $color-5;
                }
            }
        }
    }
}

.bb-pro-variation {
    ul {
        li.active {
            background-color: $color-5 !important;
            border-color: $color-5 !important;
        }
    }
}

.banner-two-box {
    span {
        color: $color-5;
    }
}

.bb-btn-2 {
    background-color: $color-5;
    border-color: $color-5;
}

.hero-slider {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $color-5;
    }
}

ul#ProTab {
    li.active {
        a{
            color: $color-5;
        }
    }
}

ul.bb-vendors-tab-nav {
    li {
        a.active {
            border-color: $color-5;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-5;
                    }
                }
            }
        }
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .bb-footer-links {
                .bb-footer-link {
                    color: $color-5;
                    span {
                        i {
                            color: $color-5;
                        }
                    }
                    a {
                        &:hover {
                            color: $color-5;
                        }
                    }
                }
            }
        }
        .bb-footer-social {
            .bb-footer-widget {
                .bb-footer-links {
                    .bb-footer-link {
                        a {
                            &:hover {
                                background-color: $color-5;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-directory {
        .directory-contact {
            .inner-contact {
                ul {
                    li {
                        a {
                            &:hover {
                                color: $color-5;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-tags {
    ul {
        li {
            &:hover {
                background-color: $color-5;
            }
        }
    }
}

.footer-bottom {
    .bb-copy {
        a {
            color: $color-5;
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        &:after {
            border-color: $color-5;
            background-color: $color-5;
        }
    }
}

.bb-pro-list-top {
    .bb-bl-btn {
        button.active {
            background-color: $color-5;
        }
    }
}

.price-range-slider {
    .range-bar {
        .ui-slider-range {
            background: $color-5;
        }
        .ui-slider-handle + span {
            background: $color-5;
        }
        .ui-slider-handle {
            border-color: $color-5;
        }
    }
}

.bb-single-pro-contact {
    .bb-single-rating {
        .bb-read-review {
            a {
                color: $color-5;
            }
        }
    }
    .bb-single-price-wrap {
        .bb-single-price {
            .stock {
                span {
                    color: $color-5;
                }
            }
            .price {
                h5 {
                    span {
                        color: $color-5;
                    }
                }
            }
        }
    }
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li.active-variation {
                    background-color: $color-5;
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                &:hover {
                    background-color: $color-5;
                }
            }
        }
    }
}

.single-pro-slider {
    .single-nav-thumb {
        .slick-slide {
            &:hover {
                img {
                    border-color: $color-5;
                }
            }
        }
        .slick-slide.slick-current.slick-active {
            img {
                border-color: $color-5;
            }
        }
    }
}

.bb-team-box {
    .bb-team-img {
        .bb-team-socials {
            ul {
                li {
                    a {
                        i {
                            &:hover {
                                color: $color-5;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        .blog-sidebar-card {
            .blog-sidebar-contact {
                span {
                    color: $color-5;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                .bb-details-btn {
                    color: $color-5;
                    i {
                        color: $color-5;
                    }
                }
            }
        }
    }
}

.bb-wishlist {
    .bb-pro-img {
        .bb-remove-wish {
            i {
                &:hover {
                    color: $color-5;
                }
            }
        }
    }
}

a.back-to-top {
    color: $color-5;
    border-color: $color-5;
    svg {
        path {
            stroke: $color-5;
        }
    }
}

ul.bb-shop-tags {
    li.active-tags {
        a {
            color: $color-5;
            border-color: $color-5;
        }
    }
    li {
        a {
            &:hover {
                color: $color-5;
                border-color: $color-5;
            }
        }
    }
}

ul#ProductTab {
    li.active {
        a {
            color: $color-5;
        }
    }
}

ul#vendorstab {
    li.active {
        a {
            border-color: $color-5;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-5;
                    }
                }
            }
        }
    }
}
```

## File: color-6.scss
```scss
/* color-6 */
@import "utilities/_variables";

.bb-header-btn {
    .header-icon {
        svg {
            path {
                fill: $color-6;
            }
        }
    }
}

[type="radio"] {
    &:checked {
        + label {
            &:before {
                border-color: $color-6;
            }
            &:after {
                background-color: $color-6;
            }
        }
    }
}

.hero-contact {
    h1,
    h2 {
        span {
            color: $color-6;
        }
    }
}
.select-options {
    li {
        &:hover {
            color: $color-6;
        }
    }
}
::selection {
    color: $color-6;
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            svg {
                path {
                    fill: $color-6;
                }
            }
        }
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    &:hover {
                        a.nav-link {
                            color: $color-6;
                            &:after {
                                border-color: $color-6;
                            }
                        }
                    }
                    a {
                        svg {
                            path {
                                fill: $color-6;
                            }
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        .menu_title {
                            a {
                                color: $color-6;
                            }
                        }
                        li {
                            a {
                                &:hover {
                                    color: $color-6;
                                }
                            }
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            a {
                                &:hover {
                                    color: $color-6;
                                }
                            }
                            &:hover {
                                > a {
                                    color: $color-6;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                svg {
                    path {
                        fill: $color-6;
                    }
                }
            }
        }
    }
}

.bb-compare {
    .bb-remove-compare {
        i {
            &:hover {
                color: $color-6;
            }
        }
    }
}
.top-header {
    .inner-top-header {
        .col-right-bar {
            .cols {
                .dropdown {
                    a {
                        &:hover {
                            color: $color-6;
                        }
                    }
                }
            }
        }
    }
}
.bottom-header {
    .inner-bottom-header {
        .bb-sidebar-toggle {
            svg {
                path {
                    fill: $color-6;
                }
            }
        }
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    li {
                        a {
                            &:hover {
                                color: $color-6;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-toggle-menu {
    .header-icon {
        i {
            color: $color-6;
        }
    }
}

.section-hero {
    .bb-social-follow {
        ul.inner-links {
            li {
                a {
                    &:hover {
                        color: $color-6;
                    }
                }
            }
        }
    }
}

.hero-contact {
    h2 {
        span {
            color: $color-6;
        }
    }
}

.section-title {
    .section-detail {
        h2 {
            span {
                color: $color-6;
            }
        }
    }
}

.bb-btn-1 {
    &:hover {
        background: $color-6;
        border-color: $color-6;
    }
}

.bb-pro-box {
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                &:hover {
                    background-color: $color-6;
                    border-color: $color-6;
                }
            }
        }
    }
    .bb-pro-contact {
        .bb-price {
            .inner-price {
                .item-left {
                    color: $color-6;
                }
            }
        }
        h4.bb-pro-title {
            a {
                &:hover {
                    color: $color-6;
                }
            }
        }
    }
}

.bb-pro-variation {
    ul {
        li.active {
            background-color: $color-6 !important;
            border-color: $color-6 !important;
        }
    }
}

.banner-two-box {
    span {
        color: $color-6;
    }
}

.bb-btn-2 {
    background-color: $color-6;
    border-color: $color-6;
}

.hero-slider {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $color-6;
    }
}

ul#ProTab {
    li.active {
        a{
            color: $color-6;
        }
    }
}

ul.bb-vendors-tab-nav {
    li {
        a.active {
            border-color: $color-6;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-6;
                    }
                }
            }
        }
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .bb-footer-links {
                .bb-footer-link {
                    color: $color-6;
                    span {
                        i {
                            color: $color-6;
                        }
                    }
                    a {
                        &:hover {
                            color: $color-6;
                        }
                    }
                }
            }
        }
        .bb-footer-social {
            .bb-footer-widget {
                .bb-footer-links {
                    .bb-footer-link {
                        a {
                            &:hover {
                                background-color: $color-6;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-directory {
        .directory-contact {
            .inner-contact {
                ul {
                    li {
                        a {
                            &:hover {
                                color: $color-6;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-tags {
    ul {
        li {
            &:hover {
                background-color: $color-6;
            }
        }
    }
}

.footer-bottom {
    .bb-copy {
        a {
            color: $color-6;
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        &:after {
            border-color: $color-6;
            background-color: $color-6;
        }
    }
}

.bb-pro-list-top {
    .bb-bl-btn {
        button.active {
            background-color: $color-6;
        }
    }
}

.price-range-slider {
    .range-bar {
        .ui-slider-range {
            background: $color-6;
        }
        .ui-slider-handle + span {
            background: $color-6;
        }
        .ui-slider-handle {
            border-color: $color-6;
        }
    }
}

.bb-single-pro-contact {
    .bb-single-rating {
        .bb-read-review {
            a {
                color: $color-6;
            }
        }
    }
    .bb-single-price-wrap {
        .bb-single-price {
            .stock {
                span {
                    color: $color-6;
                }
            }
            .price {
                h5 {
                    span {
                        color: $color-6;
                    }
                }
            }
        }
    }
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li.active-variation {
                    background-color: $color-6;
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                &:hover {
                    background-color: $color-6;
                }
            }
        }
    }
}

.single-pro-slider {
    .single-nav-thumb {
        .slick-slide {
            &:hover {
                img {
                    border-color: $color-6;
                }
            }
        }
        .slick-slide.slick-current.slick-active {
            img {
                border-color: $color-6;
            }
        }
    }
}

.bb-team-box {
    .bb-team-img {
        .bb-team-socials {
            ul {
                li {
                    a {
                        i {
                            &:hover {
                                color: $color-6;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        .blog-sidebar-card {
            .blog-sidebar-contact {
                span {
                    color: $color-6;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                .bb-details-btn {
                    color: $color-6;
                    i {
                        color: $color-6;
                    }
                }
            }
        }
    }
}

.bb-wishlist {
    .bb-pro-img {
        .bb-remove-wish {
            i {
                &:hover {
                    color: $color-6;
                }
            }
        }
    }
}

a.back-to-top {
    color: $color-6;
    border-color: $color-6;
    svg {
        path {
            stroke: $color-6;
        }
    }
}

ul.bb-shop-tags {
    li.active-tags {
        a {
            color: $color-6;
            border-color: $color-6;
        }
    }
    li {
        a {
            &:hover {
                color: $color-6;
                border-color: $color-6;
            }
        }
    }
}

ul#ProductTab {
    li.active {
        a {
            color: $color-6;
        }
    }
}

ul#vendorstab {
    li.active {
        a {
            border-color: $color-6;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-6;
                    }
                }
            }
        }
    }
}
```

## File: color-7.scss
```scss
/* color-7 */
@import "utilities/_variables";

.bb-header-btn {
    .header-icon {
        svg {
            path {
                fill: $color-7;
            }
        }
    }
}

[type="radio"] {
    &:checked {
        + label {
            &:before {
                border-color: $color-7;
            }
            &:after {
                background-color: $color-7;
            }
        }
    }
}

.hero-contact {
    h1,
    h2 {
        span {
            color: $color-7;
        }
    }
}
.select-options {
    li {
        &:hover {
            color: $color-7;
        }
    }
}
::selection {
    color: $color-7;
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            svg {
                path {
                    fill: $color-7;
                }
            }
        }
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    &:hover {
                        a.nav-link {
                            color: $color-7;
                            &:after {
                                border-color: $color-7;
                            }
                        }
                    }
                    a {
                        svg {
                            path {
                                fill: $color-7;
                            }
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        .menu_title {
                            a {
                                color: $color-7;
                            }
                        }
                        li {
                            a {
                                &:hover {
                                    color: $color-7;
                                }
                            }
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            a {
                                &:hover {
                                    color: $color-7;
                                }
                            }
                            &:hover {
                                > a {
                                    color: $color-7;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                svg {
                    path {
                        fill: $color-7;
                    }
                }
            }
        }
    }
}

.bb-compare {
    .bb-remove-compare {
        i {
            &:hover {
                color: $color-7;
            }
        }
    }
}
.top-header {
    .inner-top-header {
        .col-right-bar {
            .cols {
                .dropdown {
                    a {
                        &:hover {
                            color: $color-7;
                        }
                    }
                }
            }
        }
    }
}
.bottom-header {
    .inner-bottom-header {
        .bb-sidebar-toggle {
            svg {
                path {
                    fill: $color-7;
                }
            }
        }
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    li {
                        a {
                            &:hover {
                                color: $color-7;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-toggle-menu {
    .header-icon {
        i {
            color: $color-7;
        }
    }
}

.section-hero {
    .bb-social-follow {
        ul.inner-links {
            li {
                a {
                    &:hover {
                        color: $color-7;
                    }
                }
            }
        }
    }
}

.hero-contact {
    h2 {
        span {
            color: $color-7;
        }
    }
}

.section-title {
    .section-detail {
        h2 {
            span {
                color: $color-7;
            }
        }
    }
}

.bb-btn-1 {
    &:hover {
        background: $color-7;
        border-color: $color-7;
    }
}

.bb-pro-box {
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                &:hover {
                    background-color: $color-7;
                    border-color: $color-7;
                }
            }
        }
    }
    .bb-pro-contact {
        .bb-price {
            .inner-price {
                .item-left {
                    color: $color-7;
                }
            }
        }
        h4.bb-pro-title {
            a {
                &:hover {
                    color: $color-7;
                }
            }
        }
    }
}

.bb-pro-variation {
    ul {
        li.active {
            background-color: $color-7 !important;
            border-color: $color-7 !important;
        }
    }
}

.banner-two-box {
    span {
        color: $color-7;
    }
}

.bb-btn-2 {
    background-color: $color-7;
    border-color: $color-7;
}

.hero-slider {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $color-7;
    }
}

ul#ProTab {
    li.active {
        a{
            color: $color-7;
        }
    }
}

ul.bb-vendors-tab-nav {
    li {
        a.active {
            border-color: $color-7;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-7;
                    }
                }
            }
        }
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .bb-footer-links {
                .bb-footer-link {
                    color: $color-7;
                    span {
                        i {
                            color: $color-7;
                        }
                    }
                    a {
                        &:hover {
                            color: $color-7;
                        }
                    }
                }
            }
        }
        .bb-footer-social {
            .bb-footer-widget {
                .bb-footer-links {
                    .bb-footer-link {
                        a {
                            &:hover {
                                background-color: $color-7;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-directory {
        .directory-contact {
            .inner-contact {
                ul {
                    li {
                        a {
                            &:hover {
                                color: $color-7;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-tags {
    ul {
        li {
            &:hover {
                background-color: $color-7;
            }
        }
    }
}

.footer-bottom {
    .bb-copy {
        a {
            color: $color-7;
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        &:after {
            border-color: $color-7;
            background-color: $color-7;
        }
    }
}

.bb-pro-list-top {
    .bb-bl-btn {
        button.active {
            background-color: $color-7;
        }
    }
}

.price-range-slider {
    .range-bar {
        .ui-slider-range {
            background: $color-7;
        }
        .ui-slider-handle + span {
            background: $color-7;
        }
        .ui-slider-handle {
            border-color: $color-7;
        }
    }
}

.bb-single-pro-contact {
    .bb-single-rating {
        .bb-read-review {
            a {
                color: $color-7;
            }
        }
    }
    .bb-single-price-wrap {
        .bb-single-price {
            .stock {
                span {
                    color: $color-7;
                }
            }
            .price {
                h5 {
                    span {
                        color: $color-7;
                    }
                }
            }
        }
    }
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li.active-variation {
                    background-color: $color-7;
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                &:hover {
                    background-color: $color-7;
                }
            }
        }
    }
}

.single-pro-slider {
    .single-nav-thumb {
        .slick-slide {
            &:hover {
                img {
                    border-color: $color-7;
                }
            }
        }
        .slick-slide.slick-current.slick-active {
            img {
                border-color: $color-7;
            }
        }
    }
}

.bb-team-box {
    .bb-team-img {
        .bb-team-socials {
            ul {
                li {
                    a {
                        i {
                            &:hover {
                                color: $color-7;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        .blog-sidebar-card {
            .blog-sidebar-contact {
                span {
                    color: $color-7;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                .bb-details-btn {
                    color: $color-7;
                    i {
                        color: $color-7;
                    }
                }
            }
        }
    }
}

.bb-wishlist {
    .bb-pro-img {
        .bb-remove-wish {
            i {
                &:hover {
                    color: $color-7;
                }
            }
        }
    }
}

a.back-to-top {
    color: $color-7;
    border-color: $color-7;
    svg {
        path {
            stroke: $color-7;
        }
    }
}

ul.bb-shop-tags {
    li.active-tags {
        a {
            color: $color-7;
            border-color: $color-7;
        }
    }
    li {
        a {
            &:hover {
                color: $color-7;
                border-color: $color-7;
            }
        }
    }
}

ul#ProductTab {
    li.active {
        a {
            color: $color-7;
        }
    }
}

ul#vendorstab {
    li.active {
        a {
            border-color: $color-7;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-7;
                    }
                }
            }
        }
    }
}
```

## File: color-8.scss
```scss
/* color-8 */
@import "utilities/_variables";

.bb-header-btn {
    .header-icon {
        svg {
            path {
                fill: $color-8;
            }
        }
    }
}

[type="radio"] {
    &:checked {
        + label {
            &:before {
                border-color: $color-8;
            }
            &:after {
                background-color: $color-8;
            }
        }
    }
}

.hero-contact {
    h1,
    h2 {
        span {
            color: $color-8;
        }
    }
}
.select-options {
    li {
        &:hover {
            color: $color-8;
        }
    }
}
::selection {
    color: $color-8;
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            svg {
                path {
                    fill: $color-8;
                }
            }
        }
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    &:hover {
                        a.nav-link {
                            color: $color-8;
                            &:after {
                                border-color: $color-8;
                            }
                        }
                    }
                    a {
                        svg {
                            path {
                                fill: $color-8;
                            }
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        .menu_title {
                            a {
                                color: $color-8;
                            }
                        }
                        li {
                            a {
                                &:hover {
                                    color: $color-8;
                                }
                            }
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            a {
                                &:hover {
                                    color: $color-8;
                                }
                            }
                            &:hover {
                                > a {
                                    color: $color-8;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                svg {
                    path {
                        fill: $color-8;
                    }
                }
            }
        }
    }
}

.bb-compare {
    .bb-remove-compare {
        i {
            &:hover {
                color: $color-8;
            }
        }
    }
}
.top-header {
    .inner-top-header {
        .col-right-bar {
            .cols {
                .dropdown {
                    a {
                        &:hover {
                            color: $color-8;
                        }
                    }
                }
            }
        }
    }
}
.bottom-header {
    .inner-bottom-header {
        .bb-sidebar-toggle {
            svg {
                path {
                    fill: $color-8;
                }
            }
        }
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    li {
                        a {
                            &:hover {
                                color: $color-8;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-toggle-menu {
    .header-icon {
        i {
            color: $color-8;
        }
    }
}

.section-hero {
    .bb-social-follow {
        ul.inner-links {
            li {
                a {
                    &:hover {
                        color: $color-8;
                    }
                }
            }
        }
    }
}

.hero-contact {
    h2 {
        span {
            color: $color-8;
        }
    }
}

.section-title {
    .section-detail {
        h2 {
            span {
                color: $color-8;
            }
        }
    }
}

.bb-btn-1 {
    &:hover {
        background: $color-8;
        border-color: $color-8;
    }
}

.bb-pro-box {
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                &:hover {
                    background-color: $color-8;
                    border-color: $color-8;
                }
            }
        }
    }
    .bb-pro-contact {
        .bb-price {
            .inner-price {
                .item-left {
                    color: $color-8;
                }
            }
        }
        h4.bb-pro-title {
            a {
                &:hover {
                    color: $color-8;
                }
            }
        }
    }
}

.bb-pro-variation {
    ul {
        li.active {
            background-color: $color-8 !important;
            border-color: $color-8 !important;
        }
    }
}

.banner-two-box {
    span {
        color: $color-8;
    }
}

.bb-btn-2 {
    background-color: $color-8;
    border-color: $color-8;
}

.hero-slider {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $color-8;
    }
}

ul#ProTab {
    li.active {
        a{
            color: $color-8;
        }
    }
}

ul.bb-vendors-tab-nav {
    li {
        a.active {
            border-color: $color-8;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-8;
                    }
                }
            }
        }
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .bb-footer-links {
                .bb-footer-link {
                    color: $color-8;
                    span {
                        i {
                            color: $color-8;
                        }
                    }
                    a {
                        &:hover {
                            color: $color-8;
                        }
                    }
                }
            }
        }
        .bb-footer-social {
            .bb-footer-widget {
                .bb-footer-links {
                    .bb-footer-link {
                        a {
                            &:hover {
                                background-color: $color-8;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-directory {
        .directory-contact {
            .inner-contact {
                ul {
                    li {
                        a {
                            &:hover {
                                color: $color-8;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-tags {
    ul {
        li {
            &:hover {
                background-color: $color-8;
            }
        }
    }
}

.footer-bottom {
    .bb-copy {
        a {
            color: $color-8;
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        &:after {
            border-color: $color-8;
            background-color: $color-8;
        }
    }
}

.bb-pro-list-top {
    .bb-bl-btn {
        button.active {
            background-color: $color-8;
        }
    }
}

.price-range-slider {
    .range-bar {
        .ui-slider-range {
            background: $color-8;
        }
        .ui-slider-handle + span {
            background: $color-8;
        }
        .ui-slider-handle {
            border-color: $color-8;
        }
    }
}

.bb-single-pro-contact {
    .bb-single-rating {
        .bb-read-review {
            a {
                color: $color-8;
            }
        }
    }
    .bb-single-price-wrap {
        .bb-single-price {
            .stock {
                span {
                    color: $color-8;
                }
            }
            .price {
                h5 {
                    span {
                        color: $color-8;
                    }
                }
            }
        }
    }
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li.active-variation {
                    background-color: $color-8;
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                &:hover {
                    background-color: $color-8;
                }
            }
        }
    }
}

.single-pro-slider {
    .single-nav-thumb {
        .slick-slide {
            &:hover {
                img {
                    border-color: $color-8;
                }
            }
        }
        .slick-slide.slick-current.slick-active {
            img {
                border-color: $color-8;
            }
        }
    }
}

.bb-team-box {
    .bb-team-img {
        .bb-team-socials {
            ul {
                li {
                    a {
                        i {
                            &:hover {
                                color: $color-8;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        .blog-sidebar-card {
            .blog-sidebar-contact {
                span {
                    color: $color-8;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                .bb-details-btn {
                    color: $color-8;
                    i {
                        color: $color-8;
                    }
                }
            }
        }
    }
}

.bb-wishlist {
    .bb-pro-img {
        .bb-remove-wish {
            i {
                &:hover {
                    color: $color-8;
                }
            }
        }
    }
}

a.back-to-top {
    color: $color-8;
    border-color: $color-8;
    svg {
        path {
            stroke: $color-8;
        }
    }
}

ul.bb-shop-tags {
    li.active-tags {
        a {
            color: $color-8;
            border-color: $color-8;
        }
    }
    li {
        a {
            &:hover {
                color: $color-8;
                border-color: $color-8;
            }
        }
    }
}

ul#ProductTab {
    li.active {
        a {
            color: $color-8;
        }
    }
}

ul#vendorstab {
    li.active {
        a {
            border-color: $color-8;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-8;
                    }
                }
            }
        }
    }
}
```

## File: color-9.scss
```scss
/* color-9 */
@import "utilities/_variables";

.bb-header-btn {
    .header-icon {
        svg {
            path {
                fill: $color-9;
            }
        }
    }
}

[type="radio"] {
    &:checked {
        + label {
            &:before {
                border-color: $color-9;
            }
            &:after {
                background-color: $color-9;
            }
        }
    }
}

.hero-contact {
    h1,
    h2 {
        span {
            color: $color-9;
        }
    }
}
.select-options {
    li {
        &:hover {
            color: $color-9;
        }
    }
}
::selection {
    color: $color-9;
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            svg {
                path {
                    fill: $color-9;
                }
            }
        }
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    &:hover {
                        a.nav-link {
                            color: $color-9;
                            &:after {
                                border-color: $color-9;
                            }
                        }
                    }
                    a {
                        svg {
                            path {
                                fill: $color-9;
                            }
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        .menu_title {
                            a {
                                color: $color-9;
                            }
                        }
                        li {
                            a {
                                &:hover {
                                    color: $color-9;
                                }
                            }
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            a {
                                &:hover {
                                    color: $color-9;
                                }
                            }
                            &:hover {
                                > a {
                                    color: $color-9;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                svg {
                    path {
                        fill: $color-9;
                    }
                }
            }
        }
    }
}

.bb-compare {
    .bb-remove-compare {
        i {
            &:hover {
                color: $color-9;
            }
        }
    }
}
.top-header {
    .inner-top-header {
        .col-right-bar {
            .cols {
                .dropdown {
                    a {
                        &:hover {
                            color: $color-9;
                        }
                    }
                }
            }
        }
    }
}
.bottom-header {
    .inner-bottom-header {
        .bb-sidebar-toggle {
            svg {
                path {
                    fill: $color-9;
                }
            }
        }
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    li {
                        a {
                            &:hover {
                                color: $color-9;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-toggle-menu {
    .header-icon {
        i {
            color: $color-9;
        }
    }
}

.section-hero {
    .bb-social-follow {
        ul.inner-links {
            li {
                a {
                    &:hover {
                        color: $color-9;
                    }
                }
            }
        }
    }
}

.hero-contact {
    h2 {
        span {
            color: $color-9;
        }
    }
}

.section-title {
    .section-detail {
        h2 {
            span {
                color: $color-9;
            }
        }
    }
}

.bb-btn-1 {
    &:hover {
        background: $color-9;
        border-color: $color-9;
    }
}

.bb-pro-box {
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                &:hover {
                    background-color: $color-9;
                    border-color: $color-9;
                }
            }
        }
    }
    .bb-pro-contact {
        .bb-price {
            .inner-price {
                .item-left {
                    color: $color-9;
                }
            }
        }
        h4.bb-pro-title {
            a {
                &:hover {
                    color: $color-9;
                }
            }
        }
    }
}

.bb-pro-variation {
    ul {
        li.active {
            background-color: $color-9 !important;
            border-color: $color-9 !important;
        }
    }
}

.banner-two-box {
    span {
        color: $color-9;
    }
}

.bb-btn-2 {
    background-color: $color-9;
    border-color: $color-9;
}

.hero-slider {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $color-9;
    }
}

ul#ProTab {
    li.active {
        a{
            color: $color-9;
        }
    }
}

ul.bb-vendors-tab-nav {
    li {
        a.active {
            border-color: $color-9;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-9;
                    }
                }
            }
        }
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .bb-footer-links {
                .bb-footer-link {
                    color: $color-9;
                    span {
                        i {
                            color: $color-9;
                        }
                    }
                    a {
                        &:hover {
                            color: $color-9;
                        }
                    }
                }
            }
        }
        .bb-footer-social {
            .bb-footer-widget {
                .bb-footer-links {
                    .bb-footer-link {
                        a {
                            &:hover {
                                background-color: $color-9;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-directory {
        .directory-contact {
            .inner-contact {
                ul {
                    li {
                        a {
                            &:hover {
                                color: $color-9;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-tags {
    ul {
        li {
            &:hover {
                background-color: $color-9;
            }
        }
    }
}

.footer-bottom {
    .bb-copy {
        a {
            color: $color-9;
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        &:after {
            border-color: $color-9;
            background-color: $color-9;
        }
    }
}

.bb-pro-list-top {
    .bb-bl-btn {
        button.active {
            background-color: $color-9;
        }
    }
}

.price-range-slider {
    .range-bar {
        .ui-slider-range {
            background: $color-9;
        }
        .ui-slider-handle + span {
            background: $color-9;
        }
        .ui-slider-handle {
            border-color: $color-9;
        }
    }
}

.bb-single-pro-contact {
    .bb-single-rating {
        .bb-read-review {
            a {
                color: $color-9;
            }
        }
    }
    .bb-single-price-wrap {
        .bb-single-price {
            .stock {
                span {
                    color: $color-9;
                }
            }
            .price {
                h5 {
                    span {
                        color: $color-9;
                    }
                }
            }
        }
    }
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li.active-variation {
                    background-color: $color-9;
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                &:hover {
                    background-color: $color-9;
                }
            }
        }
    }
}

.single-pro-slider {
    .single-nav-thumb {
        .slick-slide {
            &:hover {
                img {
                    border-color: $color-9;
                }
            }
        }
        .slick-slide.slick-current.slick-active {
            img {
                border-color: $color-9;
            }
        }
    }
}

.bb-team-box {
    .bb-team-img {
        .bb-team-socials {
            ul {
                li {
                    a {
                        i {
                            &:hover {
                                color: $color-9;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        .blog-sidebar-card {
            .blog-sidebar-contact {
                span {
                    color: $color-9;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                .bb-details-btn {
                    color: $color-9;
                    i {
                        color: $color-9;
                    }
                }
            }
        }
    }
}

.bb-wishlist {
    .bb-pro-img {
        .bb-remove-wish {
            i {
                &:hover {
                    color: $color-9;
                }
            }
        }
    }
}

a.back-to-top {
    color: $color-9;
    border-color: $color-9;
    svg {
        path {
            stroke: $color-9;
        }
    }
}

ul.bb-shop-tags {
    li.active-tags {
        a {
            color: $color-9;
            border-color: $color-9;
        }
    }
    li {
        a {
            &:hover {
                color: $color-9;
                border-color: $color-9;
            }
        }
    }
}

ul#ProductTab {
    li.active {
        a {
            color: $color-9;
        }
    }
}

ul#vendorstab {
    li.active {
        a {
            border-color: $color-9;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $color-9;
                    }
                }
            }
        }
    }
}
```

## File: components/_cart-sidebar.scss
```scss
/* Cart Sidebar */
.bb-open-cart {
    transform: translateX(0) !important;
    opacity: 1 !important;
}

.bb-side-cart {
    @include scrollbar;
    &:hover {
        .bb-cart-close {
            height: 25px !important;
        }
    }
    .bb-top-contact {
        .bb-cart-title {
            .bb-cart-close {
                &:after {
                    content: "";
                    width: 10px;
                    height: 10px;
                    position: absolute;
                    bottom: 3px;
                    left: 3px;
                    border: 2px solid #fff;
                    border-radius: 50%;
                }
            }
        }
    }
    .cart-related {
        @include scrollbar;
    }
    .bb-cart-box {
        ul.bb-cart-items {
            li {
                &:hover {
                    .cart-remove-item {
                        opacity: 1;
                    }
                }
            }
        }
        .bb-cart-banner {
            .banner {
                &:hover {
                    img {
                        transform: rotate(3deg) scale(1.1);
                    }
                }
            }
        }
    }
}
```

## File: components/_category-popup.scss
```scss
/* Category */
.bb-open-category {
    display: flex !important;
    align-items: center;
    justify-content: center;
}

.category-sidebar {
    @include scrollbar;
    &:hover {
        button.bb-category-close{
            height: 25px;
        }
    }
    button.bb-category-close{
        &:after {
            content: "";
            width: 10px;
            height: 10px;
            position: absolute;
            bottom: 3px;
            left: 3px;
            border: 2px solid $text-fff;
            border-radius: 50%;
        }
    }
}
```

## File: components/_common.scss
```scss
/* common */
body {
    font-family: $text-font-family;
    font-size: 15px;
    font-weight: 400;
    color: $text-color;
    line-height: 26px;
    letter-spacing: 0.02rem;
    overflow-x: hidden;
    overflow-y: scroll;
}

::selection {
    color: $primary;
    background-color: rgba(0, 0, 0, 0.04);
}

.font-Poppins {
    font-family: "Poppins, sans-serif";
}

.font-quicksand {
    font-family: "quicksand";
}

[type="radio"] {
    &:checked {
        position: relative;
        opacity: 0;
        display: none;
        + {
            label {
                &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 16px;
                    height: 16px;
                    border-radius: 100%;
                    background: $bg-fff;
                    border: 1px solid $primary;
                }
                &:after {
                    content: "";
                    width: 8px;
                    height: 8px;
                    background: $primary;
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    border-radius: 100%;
                    transition: all 0.2s ease;
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
    }
    &:not(:checked) {
        position: relative;
        opacity: 0;
        display: none;
        + {
            label {
                position: relative;
                padding-left: 26px;
                cursor: pointer;
                line-height: 16px;
                display: inline-block;
                color: $text-color;
                letter-spacing: 0;
                &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 16px;
                    height: 16px;
                    border: 1px solid $border-eee;
                    border-radius: 100%;
                    background: $bg-fff;
                }
                &:after {
                    content: "";
                    width: 8px;
                    height: 8px;
                    background: $primary;
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    border-radius: 100%;
                    transition: all 0.2s ease;
                    opacity: 0;
                    transform: scale(0);
                }
            }
        }
    }
}

/* Loader */
.bb-loader {
    .loader {
        &:before {
            content: "";
            width: 100px;
            height: 100px;
            position: absolute;
            top: -20px;
            left: -20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px dashed $secondary;
            border-radius: 50%;
            animation: animloader 5s linear infinite;
        }
    }
    @keyframes animloader {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}

input,
textarea {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    font-weight: 400;
    color: $text-color;
    border: 1px solid $border-eee;
    outline: 0;
    border-radius: $radius-10;
    &::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: $text-color;
    }
}

.custom-dropdown {
    position: relative;
    z-index: 5;
    &:hover {
        ul.dropdown {
            opacity: 1;
            display: block;
            visibility: visible;
            margin: 6px 0 0 0;
        }
    }
    .bb-dropdown-toggle {
        position: relative;
        padding-right: 15px;
        &:after {
            content: "\ea4e";
            width: 0;
            height: 0;
            position: absolute;
            top: -1px;
            right: 12px;
            font-size: 15px;
            font-family: "remixicon";
        }
    }
    ul.dropdown {
        @include ease3;
        min-width: 150px;
        padding: 10px 5px;
        margin: 25px 0 0 0;
        position: absolute;
        z-index: 16;
        text-align: left;
        opacity: 0;
        visibility: hidden;
        left: 0;
        right: auto !important;
        background: #fff;
        box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.07);
        border: 1px solid #eee;
        display: block;
        border-radius: 10px;
        li {
            a {
                padding: 0px 12px;
                font-size: 13px;
                display: block;
                color: #686e7d;
            }
        }
    }
}

/* Custom select */
.select {
    width: 100%;
    cursor: pointer;
    display: inline-block;
    position: relative;
    font-size: 16px;
    color: $text-fff;
}

select {
    display: none;
}

.custom-select {
    color: $text-777;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s ease-in;
    font-size: 14px;
    position: relative;
    svg {
        position: absolute;
        left: 0;
        width: 20px;
        height: 20px;
        path {
            fill: $primary;
        }
    }
    .custom-select {
        position: relative;
        &:after {
            content: "\ea4e";
            width: 0;
            height: 0;
            position: absolute;
            top: 0;
            right: 12px;
            font-size: 20px;
            font-family: "remixicon";
            transform: translateX(-50%);
        }
        &:active,
        .active {
            background-color: $text-fff;
        }
    }
    &:focus {
        outline: 2px;
    }
}

.select-options {
    min-width: 190px;
    max-height: 200px;
    margin: 0;
    padding: 10px 0;
    overflow-y: auto;
    display: none;
    position: absolute;
    top: 34px;
    right: 0;
    left: 0;
    z-index: 20;
    list-style: none;
    background-color: $bg-fff;
    border-radius: $radius-10;
    box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.07);
    border: 1px solid #eee;
    li {
        @include ease3;
        font-family: $text-font-family;
        font-weight: 300;
        line-height: 28px;
        letter-spacing: 0.03rem;
        margin: 0;
        padding: 5px 20px !important;
        transition: all 0.15s ease-in;
        border-radius: 5px;
        font-size: 14px;
        color: $text-777;
        &:hover {
            color: $primary;
        }
    }
    li[rel="hide"] {
        display: none;
    }
    &::-webkit-scrollbar {
        width: 10px;
        background-color: $bg-f5f5f5;
        border-radius: 0 0 5px 0;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: $bg-9e9e9e;
    }
}

/* Responsive */
@media screen and (max-width: 767px) {
    .bb-deal {
        #dealend {
            margin-top: 15px;
        }
    }
}
```

## File: components/_footer.scss
```scss
/* Footer */
.bb-footer {
	.footer-directory {
		.directory-contact {
			.inner-contact {
				ul {
					li {
						&:first-child {
							&:after {
								display: none;
							}
						}
						&:not(:last-child) {
							&:after {
								content: "|";
								padding: 0 10px;
								font-size: 14px;
								color: $text-color;
							}
						}
					}
				}
			}
		}
	}
}

.bb-heading-res{ 
	display: none;
}

/* Responsive footer css */
@media only screen and (min-width: 992px) {
	.bb-footer {
		.footer-top {
			.bb-footer-widget {
				.bb-footer-dropdown {
					display: block !important;
				}
			}
		}
	}
}

@media (max-width: 991px) {
	.bb-heading-res {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		display: block;
		text-align: right;
	}
}
```

## File: components/_header.scss
```scss
/* header */
.bb-header-btn {
    &:after {
        display: none;
    }
}

.header-search {
    .bb-btn-group-form {
        .inner-select {
            .custom-select {
                .custom-select {
                    &:after {
                        top: -5px;
                    }
                }
                .select-options {
                    left: -20px;
                }
            }
        }
        input {
            &::placeholder {
                font-size: 14px;
                font-weight: 400;
                color: $text-777;
            }
        }
    }
}

.bottom-header {
    .inner-bottom-header {
        .bb-header-buttons {
            .bb-acc-drop {
                &:hover {
                    .bb-dropdown-menu {
                        margin-top: 15px;
                        opacity: 1;
                        visibility: visible;
                    }
                }
                .bb-dropdown-menu {
                    box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.07);
                }
            }
        }
    }
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    &:hover {
                        a.nav-link {
                            color: $primary;
                            &:after {
                                border-color: $primary;
                            }
                        }
                        span {
                            color: $primary;
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.07);
                    }
                    .bb-dropdown-item {
                        &:after {
                            @include ease3;
                            content: "";
                            width: 6px;
                            height: 6px;
                            display: inline-flex;
                            border: 1px solid $secondary;
                            padding-left: 3px;
                            border-radius: 55%;
                            position: absolute;
                            top: 55%;
                            right: -14px;
                            transform: translateY(-50%);
                        }
                    }
                    &:hover {
                        .mega-menu {
                            margin-top: 10px;
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-item {
                        &:after {
                            @include ease3;
                            content: "";
                            width: 6px;
                            height: 6px;
                            display: inline-flex;
                            border: 1px solid $secondary;
                            padding-left: 3px;
                            border-radius: 55%;
                            position: absolute;
                            top: 55%;
                            right: -14px;
                            transform: translateY(-50%);
                        }
                    }
                    .bb-dropdown-menu {
                        box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.07);
                    }
                    &:hover {
                        .bb-dropdown-menu {
                            margin-top: 10px;
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                }
                .bb-mega-dropdown {
                    .bb-mega-item {
                        &:after {
                            content: "\ea6e";
                            font-family: $remixico;
                            padding: 0;
                            font-size: 18px;
                            font-weight: 300;
                            position: absolute;
                            right: 0;
                        }
                    }
                    .bb-mega-menu {
                        box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.07);
                    }
                    &:hover {
                        .bb-mega-menu {
                            margin-top: 15px;
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                .custom-select {
                    width: 100%;
                    height: 100%;
                    padding-right: 15px;
                    .select {
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }
                    .select-options {
                        min-width: 175px;
                        margin: 15px auto 0 auto;
                        padding: 10px 0;
                        left: auto;
                        right: -15px;
                        li {
                            padding: 5px 20px !important;
                        }
                    }
                    .custom-select {
                        &:after {
                            top: 20%;
                        }
                    }
                }
            }
        }
    }
}

.bb-mobile-menu {
    @include scrollbar;
    .bb-menu-inner {
        .bb-menu-content {
            ul {
                li {
                    .menu-toggle {
                        width: 100%;
                        height: 54px;
                        padding-right: 10px;
                        position: absolute;
                        z-index: 2;
                        top: 0;
                        right: 0;
                        cursor: pointer;
                        background-color: transparent;
                        display: flex;
                        align-items: center;
                        &:before {
                            content: "+";
                            margin-left: auto;
                            font-weight: 500;
                            color: $text-color;
                            font-size: 19px;
                        }
                    }
                }
            }
        }
    }
}

.bb-mobile-menu.bb-menu-open {
    transform: translateX(0);
    opacity: 1;
}

/* Responsive */
@media screen and (max-width: 1199px) {
    .bb-main-menu-desk {
        .bb-inner-menu-desk {
            .bb-main-menu {
                position: unset;
            }
        }
    }
}
```

## File: components/_newsletter-popup.scss
```scss
/* newsletter-popup */
.bb-popnews-box {
    transform: translate(-50%, -50%);
    &:hover {
        .bb-popnews-close {
            height: 25px !important;
        }
    }
}

/* Animations */
@keyframes fadeInDown {
    0% {
        transform: translateY(3rem);
    }
    100% {
        transform: translateY(0);
    }
}
@keyframes fadeOutUp {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(3rem);
    }
}

.bb-fadeInDown {
    animation: fadeInDown 0.3s ease-in-out forwards;
}

.bb-fadeOutUp {
    animation: fadeOutUp 0.2s ease-in-out forwards;
}

.bb-popnews-close {
    &:after {
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        bottom: 3px;
        left: 3px;
        border: 2px solid $border-fff;
        border-radius: 50%;
    }
}
```

## File: components/_quickview.scss
```scss
/* quickview */
.quickview-modal {
    .bb-close-modal {
        &:after {
            content: "";
            width: 10px;
            height: 10px;
            position: absolute;
            bottom: 3px;
            left: 3px;
            border: 2px solid #fff;
            border-radius: 50%;
        }
    }
    .modal-content {
        &:hover {
            .qty-close {
                height: 25px !important;
            }
        }
    }
}

/* Animations */
@keyframes fadeInDown {
    0% {
        transform: translateY(3rem);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes fadeOutUp {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(3rem);
    }
}

.bb-overflow-hidden{
    overflow: hidden;
}

.cr-fadeInDown {
    animation: fadeInDown 0.3s ease-in-out forwards;
}

.cr-fadeOutUp {
    animation: fadeOutUp 0.2s ease-in-out forwards;
}

.bb-modal {
    transform: translate(-50%, -50%);
}

.bb-pro-variation {
    ul {
        li.active {
            background-color: $primary !important;
            color: $text-fff !important;
            border-color: $primary !important;
            a {
                color: $text-fff;
            }
        }
    }
}
```

## File: components/_tools-sidebar.scss
```scss
/* tools-sidebar */
.bb-tools-sidebar {
	.bb-tools-sidebar-toggle {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.102);
	}
	.bb-tools-detail {		
		@include scrollbar;
		.bb-tools-block {
			.bb-tools-dark,
			.bb-tools-box,
			.bb-tools-rtl {
				.active-dark,
				.active-box,
				.active-rtl {
					img {
						border-color: $primary;
					}
					&:after {
						content: "\EB79";
						width: 30px;
						height: 30px;
						font-size: 20px;
						font-family: $remixico;
						position: absolute;
						top: 10px;
						right: 10px;
						border-radius: 10px;
						background-color: $primary;
						color: $text-fff;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
			}
		}
	}
}

.active-variant{
	&:after {
		font-family: $remixico;
		content: "\EB79";
		height: 35px;
		width: 35px;
		font-size: 20px;
		position: absolute;
		color: $text-fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.open-tools {
	transform: translateX(0) !important;
}
```

## File: dark.scss
```scss
/* Dark Mode */
$black: #22252f;
$black-off: #2d313e;
$title-color: #fff;
$text-color: #9ba5b5;
$border-color: #494e5d;

body {
    background-color: $black;
}

p,
li,
a {
    color: $text-color;
}

[type="radio"] {
    &:checked {
        + label {
            &:before {
                background-color: $black-off;
            }
        }
    }
    &:not(:checked) {
        + label {
            &:before {
                background-color: $black-off;
                border-color: $border-color;
            }
        }
    }
}

.custom-select {
    color: $text-color;
    ul.dropdown {
        background-color: $black-off;
    }
    .custom-select:active,
    .custom-select .active {
        background-color: $black-off;
    }
}

.custom-dropdown {
    ul.dropdown {
        background-color: $black-off;
        border-color: $border-color;
    }
}

.select-options {
    background-color: $black-off;
    border-color: $border-color;
    li {
        color: $text-color;
    }
}

.top-header {
    background-color: $black-off;
    .inner-top-header {
        .col-right-bar {
            .cols {
                .dropdown {
                    a {
                        color: $text-color;
                    }
                }
            }
        }
    }
}

.bottom-header {
    .inner-bottom-header {
        .bb-header-buttons {
            .bb-btn-title {
                color: $text-color;
            }
            .bb-btn-stitle {
                color: $title-color;
            }
            .bb-acc-drop {
                .bb-dropdown-menu {
                    background: $black-off;
                    border-color: $border-color;
                    li {
                        a {
                            color: $text-color;
                        }
                    }
                }
            }
        }
        .header-logo {
            .dark {
                display: block;
            }
            .light {
                display: none;
            }
        }
    }
}

.hero-contact {
    h1,
    h2 {
        color: $title-color;
    }
    p {
        color: $text-color;
    }
}

.header-search {
    .bb-btn-group-form {
        .inner-select {
            border-color: $border-color !important;
        }
        input {
            background-color: $black-off;
            border-color: $border-color;
            color: $text-color;
            &::placeholder {
                color: $text-color;
            }
        }
        button {
            i {
                color: $text-color;
            }
        }
    }
}

.hero-image {
    svg {
        opacity: 0.01;
    }
}

.bb-inner-tabs,
.bey-single-accordion {
    .bb-details {
        p {
            color: $text-color;
        }
    }
}

.bb-header {
    border-color: $border-color;
}

.bb-main-menu-desk {
    background-color: $black-off;
    border-color: $border-color;
    .bb-inner-menu-desk {
        .bb-header-btn {
            background-color: $black;
            border-color: $border-color;
        }
        .bb-main-menu {
            ul.navbar-nav {
                li {
                    a {
                        color: $text-color;
                        &:after {
                            border-color: $text-color;
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        background-color: $black;
                        border-color: $border-color;
                        li {
                            a {
                                color: $text-color;
                            }
                        }
                    }
                    .bb-dropdown-item {
                        &:after {
                            border-color: $text-color;
                        }
                    }
                }
                .bb-mega-dropdown {
                    .bb-mega-menu {
                        background-color: $black;
                        border-color: $border-color;
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        background-color: $black;
                        border-color: $border-color;
                        .menu_title {
                            border-color: $border-color;
                        }
                        li {
                            a {
                                color: $text-color;
                            }
                        }
                    }
                    .bb-dropdown-item {
                        &:after {
                            border-color: $text-color;
                        }
                    }
                }
            }
        }
        .bb-dropdown-menu {
            .inner-select {
                background-color: $black;
                border-color: $border-color;
            }
        }
    }
}

.coupon-down-box {
    .bb-coupon {
        border-color: $border-color;
    }
}

.bb-category-toggle {
    border-color: $border-color;
}

.bb-category-block {
    background-color: $black;
    &:before {
        background-image: url("./../img/category/top-shape-dark.png");
    }
    &:after {
        background-image: url("./../img/category/top-shape-dark.png");
    }
}

.bb-category-contact {
    .category-title {
        h2 {
            text-shadow:
                1px 1px $title-color,
                -1px 1px $title-color,
                1px -1px $title-color,
                -1px -1px $title-color;
            color: $black;
            opacity: 0.05;
        }
    }
}

.section-title {
    .section-detail {
        h2 {
            color: $title-color;
        }
        p {
            color: $text-color;
        }
    }
}

.section-offer {
    .timer {
        background-color: $black-off;
        border-color: $border-color;
    }
}

.bb-deal,
.bb-pro-box {
    .dealend-timer {
        .dealend-timer {
            background-color: $black-off;
            border-color: $border-color;
        }
        .time-block {
            color: $text-color;
            .day,
            .dots {
                color: $text-color;
            }
        }
    }
}

.bb-pro-box {
    background-color: $black;
    border-color: $border-color;
    .bb-pro-img {
        .bb-pro-actions {
            .bb-btn-group {
                background-color: $black;
                border-color: $border-color;
                i {
                    color: $text-color;
                }
            }
        }
    }
    .bb-pro-contact {
        h4.bb-pro-title {
            a {
                color: $title-color;
            }
        }
        .bb-pro-subtitle {
            span,
            a {
                color: $text-color;
            }
        }
        .bb-price {
            .last-items {
                color: $text-color;
            }
            .inner-price {
                .new-price {
                    color: $text-color;
                }
                .old-price {
                    color: $text-color;
                }
            }
        }
    }
}

.banner-box {
    .inner-banner-box {
        .inner-contact {
            a {
                color: #3d4750;
                &:hover {
                    color: $title-color;
                }
            }
        }
    }
}

.banner-two-box {
    background-color: $black;
    h4 {
        color: $title-color;
    }
    &:before {
        background-image: url("./../img/banner-two/left-shape-dark.png");
    }
    &:after {
        background-image: url("./../img/banner-two/right-shape-dark.png");
    }
}

.bb-btn-1 {
    color: $text-color;
    border-color: $border-color;
}

.bb-btn-2 {
    &:hover {
        border-color: $border-color;
        color: $text-color;
    }
}

.bb-pro-tab {
    ul.bb-pro-tab-nav {
        li {
            a {
                color: $text-color;
            }
        }
    }
}

.bb-services-box {
    border-color: $border-color;
    .services-contact {
        h4 {
            color: $title-color;
        }
        p {
            color: $text-color;
        }
    }
}

ul.bb-vendors-tab-nav {
    li {
        a {
            background-color: $black-off;
            border-color: $border-color;
        }
    }
}

.bb-vendors-box {
    .inner-heading {
        h5 {
            color: $title-color;
        }
        span {
            color: $text-color;
        }
    }
    p {
        color: $text-color;
    }
}

.blog-2-card {
    &:hover {
        .blog-contact {
            background-color: $black;
        }
    }
}

.bb-vendors-img {
    img {
        border-color: $border-color;
    }
    .vendors-local-shape {
        background-color: $black;
        .inner-shape {
            &:before {
                background-image: url("./../img/banner-two/left-shape-dark.png");
            }
            &:after {
                background-image: url("./../img/banner-two/left-shape-dark.png");
            }
        }
    }
}

.bb-sidebar-block-item {
    a {
        color: $text-color;
    }
}

.bb-testimonials {
    .inner-banner {
        h4 {
            text-shadow:
                1px 1px $title-color,
                -1px 1px $title-color,
                1px -1px $title-color,
                -1px -1px $title-color;
            color: $black;
            opacity: 0.05;
        }
    }
    .bb-testimonials-inner {
        .testimonials-contact {
            h4 {
                color: $title-color;
            }
            span {
                color: $text-color;
            }
            .inner-contact {
                background-color: $black;
                border-color: $border-color;
                p {
                    color: $text-color;
                }
            }
        }
    }
}
.section-instagram {
    .bb-title {
        background-color: $black;
        h3 {
            color: $title-color;
        }
    }
}
.blog-2-card {
    .blog-contact {
        background-color: rgba(34, 37, 47, 0.9);
        span {
            color: $text-color;
        }
        h4 {
            a {
                color: $title-color;
            }
        }
    }
}

.bb-footer {
    background-color: $black-off;
    color: $text-color;
    .footer-directory {
        border-color: $border-color;
        .directory-title {
            h4 {
                color: $title-color;
            }
        }
        .directory-contact {
            .inner-contact {
                ul {
                    span {
                        color: $text-color;
                    }
                    li {
                        a {
                            color: $text-color;
                        }
                    }
                }
            }
        }
    }
    .footer-container {
        border-color: $border-color;
    }
    .footer-top {
        .bb-footer-widget {
            .bb-footer-heading {
                color: $title-color;
                border-color: $border-color;
            }
            .bb-footer-logo {
                display: none;
            }
            .bb-footer-dark-logo {
                display: block;
            }
            .bb-footer-detail {
                color: $text-color;
            }

            .bb-footer-links {
                .bb-footer-link {
                    a {
                        color: $text-color;
                    }
                }
            }
        }
        .bb-footer-contact {
            .bb-footer-widget {
                .bb-footer-links {
                    li {
                        p {
                            color: $text-color;
                        }
                    }
                }
            }
        }
    }
}

.footer-bottom {
    border-color: $border-color;
    .bb-copy {
        color: $text-color;
        span {
            color: $text-color;
        }
    }
}

.bb-back-to-top {
    border-color: $border-color;
}

.bb-side-cart {
    background-color: $black;
    .bb-border-right {
        border-color: $border-color !important;
    }
    .bb-inner-cart {
        .bb-bottom-cart {
            .cart-sub-total {
                border-color: $border-color;
            }
        }
        .bb-top-contact {
            .bb-cart-title {
                h4 {
                    color: $title-color;
                }
            }
        }
    }
    .bb-top-contact {
        .bb-cart-title {
            h4 {
                color: $title-color;
            }
        }
    }
    .bb-cart-box {
        ul.bb-cart-items {
            li {
                background-color: $black-off;
                border-color: $border-color;
                .bb-cart-contact {
                    .bb-cart-sub-title {
                        color: $title-color;
                    }
                    .inner-price {
                        .new-price {
                            color: $text-color;
                        }
                    }
                }
            }
        }
    }
}

.category-sidebar {
    background-color: $black;
}

.bb-side-cart {
    .bb-inner-cart {
        .bb-bottom-cart {
            .cart-sub-total {
                table {
                    td {
                        background-color: $black;
                        color: $text-color;
                    }
                }
            }
        }
    }
}

.section-hero {
    background-color: #1d2029;
    .bb-social-follow {
        ul.inner-links {
            li {
                a {
                    color: $text-color;
                }
            }
        }
    }
}

.bb-category-sidebar {
    .sub-title {
        h4 {
            color: $title-color;
        }
    }
    .bb-category-cart {
        background-color: $black-off;
        border-color: $border-color;
        .side-contact {
            h4 {
                a {
                    color: $title-color;
                }
            }
            .inner-price {
                .new-price {
                    color: $text-color;
                }
                .old-price {
                    color: $text-color;
                }
            }
        }
    }
}

input,
textarea {
    background-color: $black-off;
    border-color: $border-color;
    color: $text-color;
    &::placeholder {
        color: $text-color;
    }
}

.bb-tags {
    ul {
        li {
            border-color: $border-color;
            a {
                color: $text-color;
            }
        }
    }
}

.bb-mobile-menu {
    background-color: $black;
    .bb-menu-title {
        .menu_title {
            color: $title-color;
        }
    }
    .bb-menu-inner {
        .bb-menu-content {
            ul {
                li {
                    a {
                        border-color: $border-color;
                        color: $text-color;
                    }
                    .sub-menu {
                        li {
                            a {
                                color: $text-color;
                            }
                            .sub-menu {
                                li {
                                    a {
                                        color: $text-color;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

.section-breadcrumb {
    border-color: $border-color;
    background-color: $black;
}

.bb-cart-table {
    border-color: $border-color;
}

.qty-plus-minus {
    background: $black;
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                span {
                    color: $text-color;
                }
            }
        }
    }
}

.bb-cart-table {
    table {
        tbody {
            tr {
                &:not(:last-child) {
                    border-color: $border-color;
                }
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                p {
                    color: $text-color;
                }
            }
        }
    }
    .inner-blog-details-contact {
        p {
            color: $text-color;
        }
    }
}

.bb-breadcrumb-inner {
    h2.bb-breadcrumb-title {
        color: $title-color;
        li {
            color: $text-color;
            a {
                color: $text-color;
            }
        }
    }
    .bb-breadcrumb-list {
        li {
            color: $text-color;
            a {
                color: $text-color;
            }
        }
    }
}

.bb-login-wrap {
    input {
        border-color: $border-color;
    }
}

.bb-details-input {
    input,
    textarea {
        border-color: $border-color;
    }
}

.bb-accordion-item {
    .accordion-head {
        color: $title-color;
        border-color: $border-color;
    }
}

.accordion-body {
    p {
        color: $text-color;
    }
}

.accordion-head {
    &:after {
        color: $title-color;
    }
}

.accordion-head.active-arrow {
    &:after {
        color: $title-color;
    }
}

.input-item {
    input {
        border-color: $border-color;
    }
}

.bb-about-contact {
    .about-inner-contact {
        p {
            color: $text-color;
        }
    }
}

.bb-pro-pagination {
    p {
        color: $text-color;
    }
}

.bb-pro-box {
    .bb-pro-contact {
        p {
            color: $text-color;
        }
    }
}

.bb-pro-rating {
    i.ri-star-line {
        color: $text-color;
    }
}

.bb-pro-list-top {
    background-color: $black-off;
    border-color: $border-color;
    .bb-bl-btn button {
        i {
            color: $title-color;
        }
    }
}

.bb-pro-pagination {
    ul {
        li {
            a {
                background-color: $black-off;
                border-color: $border-color;
                color: $title-color;
            }
        }
    }
}

.bb-shop-wrap {
    background-color: $black-off;
    border-color: $border-color;
    .bb-sidebar-block {
        &:not(:last-child) {
            border-color: $border-color;
        }
        .bb-sidebar-title {
            h3 {
                color: $title-color;
            }
        }
    }
}

.price-range-slider {
    .range-value {
        input {
            background-color: $black;
            border-color: $border-color;
            color: $text-color;
            &::placeholder {
                color: $text-color;
            }
        }
    }
    .range-bar {
        .ui-slider-handle {
            background-color: $black;
        }
    }
}

.bb-sidebar-block-item {
    .checked {
        background-color: $black;
        border-color: $border-color;
    }
}

.bb-shop-sidebar {
    background-color: $black-off;
    .sidebar-filter-title {
        h5 {
            color: $title-color;
        }
    }
}

.quickview-modal {
    .modal-content {
        background-color: $black-off;
        .single-pro-img {
            border-color: $border-color;
        }
    }
}

.bb-side-cart {
    .bb-cart-box {
        ul.bb-cart-items {
            li {
                .bb-cart-contact {
                    span.cart-price {
                        span {
                            color: $text-color;
                        }
                    }
                }
            }
        }
    }
}

.quickview-pro-content {
    .bb-quick-title {
        a {
            color: $title-color;
        }
    }
    .bb-quickview-desc {
        color: $text-color;
    }
    .bb-quickview-price {
        span.new-price {
            color: $text-color;
        }
        span.old-price {
            color: $text-color;
        }
    }
}

.bb-pro-variation {
    ul {
        li {
            border-color: $border-color;
            a {
                color: $text-color;
            }
        }
    }
}

.qty-plus-minus {
    border-color: $border-color;
    .bb-qtybtn {
        color: $text-color;
    }
    .qty-input {
        color: $text-color;
    }
}

.bnr-details-bg {
    background-color: $black-off;
    border-color: $border-color;
}

ul.bb-shop-tags {
    li {
        a {
            background-color: $black;
            color: $text-color;
            border-color: $border-color;
        }
    }
}

.single-pro-slider {
    border-color: $border-color;
}

.bb-single-pro-contact {
    .bb-sub-title {
        h4 {
            color: $title-color;
        }
    }
    .bb-single-price-wrap {
        .bb-single-price {
            .price {
                h5 {
                    color: $text-color;
                }
            }
            .sku {
                h5 {
                    color: $text-color;
                }
            }
            .mrp {
                p {
                    color: $text-color;
                }
            }
        }
    }
    .bb-single-list {
        ul {
            li {
                color: $text-color;
                span {
                    color: $text-color;
                }
            }
        }
    }
    .bb-single-pro-weight {
        .pro-title {
            h4 {
                color: $title-color;
            }
        }
        .bb-pro-variation-contant {
            ul {
                li {
                    border-color: $border-color;
                    span {
                        color: $text-color;
                    }
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                background-color: $black;
                border-color: $border-color;
                i {
                    color: $text-color;
                }
            }
        }
    }
}

.bb-inner-tabs,
.bey-single-accordion {
    border-color: $border-color;
    .bb-details {
        .details-info {
            ul {
                li {
                    color: $text-color;
                }
            }
        }
    }
    .bb-reviews {
        .reviews-bb-box {
            .inner-contact {
                h4 {
                    color: $title-color;
                }
                p {
                    color: $text-color;
                }
            }
        }
    }
    .bb-reviews-form {
        h3 {
            color: $title-color;
        }
        .bb-review-rating {
            span {
                color: $title-color;
            }
        }
    }
}

.bb-inner-tabs,
.bey-single-accordion {
    .bb-reviews-form {
        .input-box {
            input,
            textarea {
                border-color: $border-color;
                color: $text-color;
            }
        }
    }
    .accordion {
        .accordion-item {
            .accordion-header {
                .accordion-button {
                    border-color: $border-color;
                    color: $title-color;
                }
            }
        }
    }
    .infomation {
        ul {
            li {
                color: $text-color;
            }
        }
    }
}

.bb-about-contact {
    .about-inner-contact {
        h4 {
            color: $title-color;
        }
    }
}

.bb-vendor-rows {
    .bb-vendor-box {
        background-color: $black-off;
        border-color: $border-color;
        .bb-count {
            h5 {
                color: $title-color;
            }
        }
        .inner-text {
            p {
                color: $text-color;
            }
        }
    }
}

.bb-team-box {
    .bb-team-contact {
        h5 {
            color: $title-color;
        }
        p {
            color: $text-color;
        }
    }
}

.bb-team-box {
    .bb-team-img {
        .bb-team-socials {
            background-color: $black;
            .inner-shape {
                &:before {
                    background-image: url("./../img/team/top-shape-dark.png");
                }
                &:after {
                    background-image: url("./../img/team/bottom-shape-dark.png");
                }
            }
        }
    }
}

.bb-contact-form {
    border-color: $border-color;
    .bb-contact-wrap {
        input,
        textarea {
            border-color: $border-color;
            color: $text-color;
        }
    }
}

.bb-cart-table {
    table {
        border-color: $border-color;
        thead {
            tr {
                border-color: $border-color;
                th {
                    color: $title-color;
                }
            }
        }
        tbody {
            tr {
                border-color: $border-color;
            }
            .Product-cart {
                span {
                    color: $text-color;
                }
            }
            span.price {
                color: $text-color;
            }
            .pro-remove {
                i {
                    color: $text-color;
                }
            }
        }
    }
}

.bb-cart-sidebar-block {
    background-color: $black-off;
    border-color: $border-color;
    .bb-sb-title {
        h3 {
            color: $title-color;
        }
    }
    .bb-sb-blok-contact {
        .input-box {
            label {
                color: $title-color;
            }
            input {
                background-color: $black;
                border-color: $border-color;
                color: $text-color;
            }
            .custom-select {
                background-color: $black;
                border-color: $border-color;
            }
        }
    }
    .bb-cart-summary {
        .summary-total {
            border-color: $border-color;
            ul {
                li {
                    span {
                        color: $text-color;
                    }
                }
            }
        }
        .inner-summary {
            ul {
                li {
                    span {
                        color: $text-color;
                    }
                }
            }
        }
    }
}

.bb-checkout-sidebar {
    .checkout-method {
        span.details {
            color: $text-color;
        }
        .bb-del-option {
            .bb-del-head {
                color: $title-color;
            }
        }
        .radio-itens {
            label {
                color: $text-color;
            }
        }
    }
    .checkout-summary {
        border-color: $border-color;
        ul {
            li {
                span {
                    color: $text-color;
                }
            }
        }
    }
    .checkout-items {
        border-color: $border-color;
        .sub-title {
            h4 {
                color: $title-color;
            }
        }
    }
    .bb-checkout-pro {
        .pro-items {
            background-color: $black-off;
            border-color: $border-color;
            .items-contact {
                h4 {
                    a {
                        color: $title-color;
                    }
                }
                .inner-price {
                    .new-price {
                        color: $text-color;
                    }
                    .old-price {
                        color: $text-color;
                    }
                }
            }
        }
    }
    .about-order {
        h5 {
            color: $text-color;
        }
        textarea {
            border-color: $border-color;
            color: $text-color;
        }
    }
}

.bb-checkout-contact {
    border-color: $border-color;
    form {
        .input-item {
            label {
                color: $title-color;
            }
        }
    }
    p {
        color: $text-color;
    }
    .main-title {
        h4 {
            color: $title-color;
        }
    }
    .inner-title {
        color: $title-color;
    }
    .checkout-radio {
        .radio-itens {
            label {
                color: $text-color;
            }
        }
    }
    .input-box-form {
        .input-item {
            .custom-select {
                border-color: $border-color;
            }
        }
    }
}

.bb-faq-contact {
    .accordion-item {
        .accordion-button {
            border-color: $border-color;
        }
    }
    .accordion-header {
        .accordion-button {
            color: $title-color;
            &:not(.collapsed) {
                &:after {
                    color: $title-color;
                }
            }
            &:after {
                color: $title-color;
            }
        }
    }
    .accordion-body {
        color: $text-color;
    }
}

.bb-login-contact {
    border-color: $border-color;
    .bb-login-wrap {
        label {
            color: $title-color;
        }
        a {
            color: $title-color;
        }
    }
}

.bb-register {
    border-color: $border-color;
    form {
        .bb-register-wrap {
            label {
                color: $title-color;
            }
            input,
            .custom-select {
                background-color: $black-off;
                border-color: $border-color;
                color: $text-color;
            }
        }
    }
}

.bb-tools-sidebar {
    background-color: $black;
    .bb-bar-title {
        border-color: $border-color;
    }
    .bb-tools-detail {
        .bb-tools-block {
            h3 {
                color: $title-color;
            }
            p {
                color: $text-color;
            }
        }
    }
}

.accordion-button {
    &:after {
        color: $title-color;
    }
    &:not(.collapsed) {
        &:after {
            color: $title-color;
        }
    }
}

.bb-tools-sidebar {
    .bb-bar-title {
        h6 {
            color: $title-color;
        }
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        border-color: $border-color;
        .blog-sidebar-title {
            h4 {
                color: $title-color;
            }
        }
        .blog-sidebar-card {
            background-color: $black-off;
            border-color: $border-color;
            .blog-sidebar-contact {
                h4 {
                    a {
                        color: $title-color;
                    }
                }
                p {
                    color: $text-color;
                }
            }
        }
    }
}

.bb-blog-card {
    border-color: $border-color;
    background-color: $black-off;
    .blog-contact {
        h5 {
            a {
                color: $title-color;
            }
        }
    }
}

.bb-blog-details-contact {
    .inner-blog-details-contact {
        span {
            color: $text-color;
        }
        h4.sub-title {
            color: $title-color;
        }
    }
    .bb-blog-details-comment {
        .main-title {
            h4 {
                color: $title-color;
            }
        }
        .bb-comment-box {
            .inner-contact {
                h5.sub-title {
                    color: $title-color;
                }
            }
        }
    }
}

.bb-popnews-box {
    background-color: $black;
    h2 {
        color: $title-color;
    }
    p {
        color: $text-color;
    }
    input {
        border-color: $border-color;
        color: $text-color;
    }
}

a.back-to-top {
    background-color: $black;
}

.compare-pro-title,
.compare-pro-detail {
    h5 {
        color: $title-color;
    }
    p {
        color: $text-color;
    }
}

.bb-compare {
    ul.bb-compare-main-box {
        li.bb-compare-inner-rows {
            &:last-child {
                border-color: $border-color;
            }
        }
        ul.bb-compare-inner-box {
            border-color: $border-color;
            li {
                &:not(:last-child) {
                    border-color: $border-color;
                }
            }
        }
    }
}
.section-track {
    .track {
        border-color: $border-color;
    }
    .block-title {
        background-color: $black-off;
        border-color: $border-color;
        h6 {
            color: $text-color;
        }
    }
    .bb-progress {
        li {
            border-color: $border-color;
            .title {
                font-weight: 600;
                color: #686e7d;
            }
            .icon {
                i {
                    color: #686e7d;
                }
            }
        }
        li.active {
            border-color: $title-color;
            .title {
                font-weight: 600;
                color: $text-color;
            }
            .icon {
                i {
                    color: $text-color;
                }
            }
        }
    }
}

.section-terms {
    .desc {
        border-color: $border-color;
        h3 {
            color: $title-color;
        }
    }
}
```

## File: layouts/_banner-one.scss
```scss
/* Banner-one */
.bg-box-color-one {
    &:before {
        background-color: $banner-shape-one;
    }
    &:after {
        background-color: $banner-shape-one;
    }
}

.bg-box-color-two {
    &:before {
        background-color: $banner-shape-two;
    }
    &:after {
        background-color: $banner-shape-two;
    }
}

.banner-box {
    &:hover{
        &:before{
            left: -210px;
            top: -210px;
        }
        &:after {
            right: -80px;
            bottom: -110px;
        }
    }
    &:before {
        @include ease3;
        content: "";
        width: 400px;
        height: 600px;
        position: absolute;
        left: -200px;
        top: -200px;
        bottom: 0;
        rotate: 40deg;
        z-index: 0;
    }
    &:after {
        @include ease3;
        content: "";
        width: 150px;
        height: 300px;
        position: absolute;
        right: -70px;
        bottom: -100px;
        rotate: 40deg;
        z-index: 0;
    }
}

/* Responsive footer css */
@media only screen and (max-width: 767px) {
    .banner-box {
        &:before {
            left: -300px;
        }
        &:after {
            right: -100px;
        }
        &:hover {
            &:before {
                left: -310px;
            } 
            &:after {
                right: -110px;
            }
        }
    }
}
```

## File: layouts/_banner-two.scss
```scss
/* Banner-two */
.banner-two-box {
    &:before{
        content: "";
        background-image: url('../img/banner-two/left-shape.png');
        background-repeat: no-repeat;
        background-size: 100%;
        height: 30px;
        width: 30px;
        position: absolute;
        z-index: 1;
        left: -30px;
        bottom: 0;
    }
    &:after{
        content: "";
        background-image: url('../img/banner-two/right-shape.png');
        background-repeat: no-repeat;
        background-size: 100%;
        height: 30px;
        width: 30px;
        position: absolute;
        z-index: 1;
        right: -30px;
        bottom: 0;
    }
}
```

## File: layouts/_blog-2.scss
```scss
/* blog-2 */
.blog-2-card {
    &:hover {
        .blog-contact {
            background-color: rgba(255, 255, 255, 1);
        }
        .blog-img {
            img {
                transform: scale(1.1) rotate(3deg);
            }
        }
    }
}
```

## File: layouts/_category.scss
```scss
/* category */
.bb-category-contact {
    .category-title {
        h2 {
            text-shadow: $text-border-shape;
        }
    }
}

.bb-category-block {
   &:before {
        content: "";
        height: 30px;
        width: 30px;
        position: absolute;
        top: -29px;
        left: 97px;
        background-image: url("../img/category/top-shape.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    &:after {
        content: "";
        height: 30px;
        width: 30px;
        position: absolute;
        bottom: 0;
        left: -29px;
        background-image: url("../img/category/top-shape.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
}

.bb-category-box {
    &:hover {
        .category-image {
            img, svg {
                animation: zoom-in-zoom-out .5s ease-out;
            }
        }
    }
    @keyframes zoom-in-zoom-out {
        0% {
          transform: scale(1, 1);
          opacity: 1;
        }
        50% {
          transform: scale(1.2, 1.2);
        }
        100% {
          transform: scale(1, 1);
          opacity: 1;
        }
      }
}

/* Responsive footer css */
@media only screen and (max-width: 991px) {
    .bb-category-block {
        &:before,
        &:after {
            display: none;
        }
    }
}
```

## File: layouts/_deal.scss
```scss
/* Deal */
.bb-deal {
    #dealend {
        padding: 0;
    }
    .dealend-timer {
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        position: relative;
        .dealend-timer {
            background-color: $bg-box;
            border-radius: $radius-15;
            border: 1px solid $border-eee;
        }
        .time-block {
            margin-left: 10px;
            position: relative;
            display: flex;
            font-size: 15px;
            font-weight: 600;
            line-height: 28px;
            color: $title-color;
            .day {
                margin-left: 5px;
                position: relative;
                font-size: 14px;
                font-weight: 400;
                display: flex;
                align-items: center;
                line-height: 28px;
                color: $title-color;
            }
            .time {
                min-width: 20px;
                position: relative;
            }
            .dots {
                margin-top: -1px;
                margin-left: 5px;
                color: $title-color;
            }
        }
    }
}

/* Responsive footer css */
@media only screen and (max-width: 991px) {
    .bb-deal {
        .dealend-timer {
            justify-content: center;
        }
    }
}
```

## File: layouts/_hero.scss
```scss
/* Hero */
.section-hero {
    &:after {
        content: "";
        width: 800px;
        height: 1000px;
        top: 0;
        right: 0;
    }
    .bb-scroll-Page {
        .scroll-bar {
            &:after {                
                @include ease3;
                content: "";
                height: 80px;
                width: 1px;
                position: absolute;
                right: -50px;
                bottom: -33px;
                background-color: $bg-000;
                transform: rotate(90deg);
            }
        }
    }
}
.swiper-slide-active {
    .hero-contact {
        *:nth-child(1) {
            -webkit-animation-duration: 3s;
            animation-duration: 3s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-name: fadeInUp;
            animation-name: fadeInUp;
        }
        *:nth-child(2) {
            -webkit-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-name: fadeInUp;
            animation-name: fadeInUp;
        }
        *:nth-child(3) {
            -webkit-animation-duration: 3s;
            animation-duration: 3s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-name: fadeInUp;
            animation-name: fadeInUp;
        }
    }
}
.hero-contact {
    * {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-name: fadeOutDown;
        animation-name: fadeOutDown;
    }
    &:nth-child(1) {
        webkit-animation-name: fadeInUp;
        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
    }
    &:nth-child(2) {
        webkit-animation-name: fadeInUp;
        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
    }
    &:nth-child(3) {
        webkit-animation-name: fadeInUp;
        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
    }
    h1, h2 {
        span {
            &:after {
                content: "";
                width: 48px;
                height: 60px;
                position: absolute;
                top: -40px;
                right: -40px;
                background-image: url("../img/hero/shape-1.png");
                background-size: 100%;
                background-repeat: no-repeat;
            }
        }
    }
}

.hero-slider {
    .swiper-buttons {
        display: none;
    }
    .swiper-pagination {
        margin-left: 1px;
        position: relative;
        text-align: left;
        bottom: -20px;
        z-index: 1;
    }
    .swiper-pagination-bullet {
        width: 15px;
        height: 15px;
        margin: 0 2px !important;
        transform: skew(340deg);
        display: inline-block;
        border-radius: 0;
        opacity: 1;
        background-color: #4b5966;
        box-shadow: none;
        transition: all 0.3s ease 0s;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $primary;
        width: 30px;
    }
}

.swiper-slide-active {
    .hero-image {
        img {
            opacity: 1;
        }
    }
}

.hero-image {
    img {
        opacity: 0;
    }
    svg {
        path {
            fill: $bg-fff;
            filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.015));
        }
    }
}

/* Responsive footer css */
@media only screen and (max-width: 1199px) {
    .hero-contact {
        h1, h2 {
            span {
                &:after {
                    height: 60px;
                    width: 40px;
                    top: -35px;
                    right: -35px;
                }
            }
        }
    }
}

@media only screen and (max-width: 991px) {
    .hero-contact {
        h1, h2 {
            span {
                &:after {
                    height: 40px;
                    width: 28px;
                    top: -25px;
                    right: -25px;
                }
            }
        }
    }
    .hero-slider {
        .swiper-pagination {
            display: none;
            margin: 0 0 0 -1px;
            bottom: -8px;
            text-align: right;
        }
    }
}

@media only screen and (max-width: 575px) {
    .hero-slider {
        .swiper-pagination {
            bottom: 0;
        }
    }
}
```

## File: layouts/_instagram.scss
```scss
/* Instagram */
.section-instagram {
    .bb-title {
        transform: translate(-50%, -50%);
    }
}

.bb-instagram-card{
    .instagram-img{
        &:before{
            @include ease3;
            content: "";
            height: 100%;
            width: 100%;
            background-color: $black_05;
            position: absolute;
            cursor: pointer;
            top: 0;
            right: 0;
            opacity: 0;
            border-radius: $radius-30;
        }
        &:hover{
            &:before{
                opacity: 1;
            }
            &:after{
                opacity: 1;
                transform: scale(1) rotate(0deg);
            }
        }
        &:after{
            @include ease3;
            font-family: $remixico;
            content: "\EE66";
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            cursor: pointer;
            top: 0;
            right: 0;
            opacity: 0;
            font-size: 38px;
            color: $text-fff;
            transform: scale(3) rotate(50deg);
        }
    }
}
```

## File: layouts/_new-product.scss
```scss
/* new product */
.bb-pro-tab {
    ul.bb-pro-tab-nav {
        li {
            &:not(:last-child){
                position: relative;
                &:after{
                    content: "/";
                    position: absolute;
                    right: -4px;
                    top: 0;
                    font-size: 12px;
                    color: $text-color;
                }
            }
        }
    }
}

ul#ProductTab {
    li.active {
        a {
            color: $primary;
        }
    }
}
```

## File: layouts/_product.scss
```scss
/* Product */
.bb-pro-box {
    &:hover {
        .bb-pro-img {
            .flags {
                opacity: 0;
            }
        }
    }
    .bb-pro-img {
        .flags {
            span {
                writing-mode: vertical-lr;
                text-orientation: upright;
            }
        }
        .bb-pro-actions {
            .bb-btn-group {
                &:hover {
                    background-color: $primary;
                    border-color: $primary;
                    i {
                        color: $text-fff;
                    }
                }
            }
        }
    }
    &:hover {
        .bb-pro-img {
            .inner-img {
                img {
                    transform: scale(1.1);
                    &:not(:last-child) {
                        opacity: 0;
                    }
                }
                img.hover-img {
                    opacity: 1;
                }
            }
            .bb-pro-actions {
                opacity: 1;
                bottom: 10px;
            }
        }
    }
    .bb-pro-contact {
        h4.bb-pro-title {
            a {
                &:hover {
                    color: $primary;
                }
            }
        }
    }
    .dealend-timer {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
        .dealend-timer {
            padding: 5px;
            background-color: $bg-box;
            border-bottom: 1px solid $border-eee;
        }
        .time-block {
            margin-left: 10px;
            position: relative;
            display: flex;
            font-size: 14px;
            font-weight: 600;
            line-height: 28px;
            color: $title-color;
            .day {
                margin: 0 5px;
                position: relative;
                font-size: 12px;
                font-weight: 400;
                display: flex;
                align-items: center;
                line-height: 28px;
                color: $title-color;
            }
            .time {
                min-width: 20px;
                position: relative;
            }
            .dots {
                margin-top: -1px;
                margin-left: 5px;
                color: $title-color;
            }
        }
    }
}

.qty-plus-minus {
    .bb-qtybtn {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        font-size: 20px;
        color: $text-777;
    }
    .qty-input {
        background: transparent none repeat scroll 0 0;
        border: medium none;
    }
}
```

## File: layouts/_testimonials.scss
```scss
/* Testimonials */
.bb-testimonials {
    .inner-banner {
        h4 {
            text-shadow: $text-border-shape;
        }
    }
    .bb-testimonials-inner {
        .testimonials-contact {
            img {
                display: none;
            }
        }
    }
}

/* Responsive footer css */
@media only screen and (max-width: 767px) {
    .bb-testimonials {
        .bb-testimonials-inner {
            .testimonials-contact {
                img {
                    display: flex;
                }
            }
        }
    }
}
```

## File: layouts/_vendors.scss
```scss
/* vendors */
.bb-vendors-img {
    .vendors-local-shape {
        .inner-shape {
            &:before {
                content: "";
                background-image: url("../img/banner-two/left-shape.png");
                background-repeat: no-repeat;
                background-size: 100%;
                height: 30px;
                width: 30px;
                position: absolute;
                z-index: 1;
                right: 0;
                top: -50px;
            }
            &:after {
                content: "";
                background-image: url("../img/banner-two/left-shape.png");
                background-repeat: no-repeat;
                background-size: 100%;
                height: 30px;
                width: 30px;
                position: absolute;
                z-index: 1;
                left: -50px;
                bottom: -100px;
            }
        }
    }
}

ul#vendorstab {
    li.active {
        a {
            border-color: $primary;
            .bb-vendors-box {
                .inner-heading {
                    h5 {
                        color: $primary;
                    }
                }
            }
        }
    }
}
```

## File: pages/_about.scss
```scss
/* About */
.bb-team-box {
    &:hover {
        .bb-team-img {
            .bb-team-socials {
                right: 0;
            }
        }
    }
    .bb-team-img {
        .bb-team-socials {
            .inner-shape {
                &:before {
                    content: "";
                    height: 20px;
                    width: 20px;
                    position: absolute;
                    top: -20px;
                    right: 0;
                    background-size: 100%;
                    background-image: url("../img/team/top-shape.png");
                    background-repeat: no-repeat;
                }
                &:after {
                    content: "";
                    height: 20px;
                    width: 20px;
                    position: absolute;
                    top: 147px;
                    right: 0;
                    background-size: 100%;
                    background-image: url("../img/team/bottom-shape.png");
                    background-repeat: no-repeat;
                }
            }
        }
    }
}
```

## File: pages/_blog.scss
```scss
/* blog */
.bb-blog-card {
    background-color: $bg-box;
    border: 1px solid $border-eee;
    border-radius: $radius-20;
    .blog-image {
        img {
            border-top-left-radius: $radius-20;
            border-top-right-radius: $radius-20;
            width: 100%;
        }
    }
    .blog-contact {
        padding: 20px;
        h5 {
            margin-bottom: 12px;
            font-size: 18px;
            a {
                font-size: 18px;
                font-weight: 500;
                color: $title-color;
            }
        }
        p {
            margin-bottom: 12px;
            font-size: 14px;
            line-height: 26px;
            font-weight: 300;
        }
        .blog-btn {
            display: flex;
            a {
                padding: 2px 14px;
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-comment-box {
            .inner-contact {
                .bb-details-btn {
                    &:hover {
                        i {
                            padding-left: 4px;
                        }
                    }
                }
            }
        }
    }
}
```

## File: pages/_cart-page.scss
```scss
/* Cart */
.bb-cart-sidebar-block {
    .bb-sb-blok-contact {
        .input-box {
            input {
                &::placeholder {
                    font-size: 14px;
                    font-weight: 400;
                    color: $text-color;
                }
            }
        }
    }
}

/* Responsive */
@media screen and (max-width: 1399px) {
    .bb-cart-table {
        @include scrollbar;
    }
}
```

## File: pages/_checkout-page.scss
```scss
/* checkout */
.bb-checkout-sidebar {
    .about-order {
        textarea {
            &::placeholder {
                font-size: 14px;
                font-weight: 400;
                color: $text-color;
            }
        }
    }
}
```

## File: pages/_compare.scss
```scss
/* compare */
.bb-compare {
    @include scrollbar;
}
```

## File: pages/_faq.scss
```scss
/* Faq */
.accordion-head {
    &:after {
        font-family: $remixico;
        content: "\F1AF";
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 18px;
        color: $text-000;
        font-weight: 500;
        position: absolute;
        top: 20px;
        right: 20px;
    }
}

.accordion-head.active-arrow {
    &:after {
        font-family: $remixico;
        content: "\EA13";
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 18px;
        color: $text-000;
        font-weight: 500;
        position: absolute;
        top: 16px;
        right: 20px;
        transform: rotate(90deg);
    }
}
```

## File: pages/_shop-page.scss
```scss
/* Shop */
ul.bb-shop-tags {
    li.active-tags {
        a {
            color: $primary;
            border-color: $primary;
        }
    }
}

.bb-shop-sidebar {
    @include scrollbar;
}

.bb-shop-sidebar-open {
    transform: translateX(0) !important;
}

.width-50 {
    flex: 0 0 auto !important;
    width: 50% !important;
    .bb-pro-box {
        display: flex;
        .bb-pro-img {
            max-width: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $bg-fff;
            border-bottom: 0;
            border-right: 1px solid $border-eee;
            border-top-left-radius: $radius-20;
            border-bottom-left-radius: $radius-20;
            .inner-img {
                border-top-right-radius: 0;
                border-bottom-left-radius: $radius-20;
            }
        }
        .bb-pro-contact {
            display: flex;
            flex-direction: column;
            justify-content: center;
            p {
                display: flex;
            }
        }
    }
}

.width-100 {
    flex: 0 0 auto !important;
    width: 100% !important;
    .bb-pro-box {
        display: flex;
        .bb-pro-img {
            max-width: 250px;
            border-bottom: 0;
            border-right: 1px solid $border-eee;
            .inner-img {
                border-top-right-radius: 0;
                border-bottom-left-radius: $radius-20;
            }
        }
        .bb-pro-contact {
            display: flex;
            flex-direction: column;
            justify-content: center;
            p {
                display: flex;
            }
        }
    }
}

.bb-pro-pagination {
    ul {
        li.active {
            a {
                background-color: $secondary;
                color: $text-fff;
            }
        }
    }
}

.bb-pro-list-top {
    .bb-bl-btn {
        button.active {
            background-color: $primary;
            color: $text-fff;
            border-radius: $radius-15;
        }
    }
    .bb-select-inner {
        .custom-select {
            width: 130px;
            justify-content: flex-end;
            &:after {
                right: -10px;
                top: -5px;
            }
        }
    }
}

.bb-sidebar-block-item {
    input {
        &:checked ~ .checked::after {
            display: block;
        }
    }
    .checked {
        &:after {
            left: -1px;
            top: -1px;
            width: 18px;
            height: 18px;
            border: 1px solid $primary;
            content: "\EB7B";
            position: absolute;
            display: none;
            background: $primary;
            font-family: $remixico;
            font-size: 14px;
            font-weight: 800;
            color: $bg-fff;
            line-height: 16px;
            text-align: center;
        }
    }
}

.bb-color-contact {
    ul {
        li.color-sidebar-active {
            .bb-sidebar-block-item {
                span {
                    &:after {
                        width: 22px;
                        height: 22px;
                        content: "\EB7B";
                        font-family: $remixico;
                        position: absolute;
                        top: 0;
                        left: 0;
                        font-size: 16px;
                        font-weight: 700;
                        color: $text-fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }
        }
    }
}

.price-range-slider {
    .range-bar {
        border: none;
        background: $text-000;
        height: 3px;
        width: 96%;
        margin-left: 8px;
        .ui-slider-range {
            background: $primary;
        }
        .ui-slider-handle {
            border: none;
            border-radius: 25px;
            background: $bg-fff;
            top: -7px;
            border: 2px solid $primary;
            height: 17px;
            width: 17px;
            cursor: pointer;
        }
        .ui-slider-handle + span {
            background: $primary;
        }
    }
}

.bb-tags {
    ul {
        li {
            &:hover {
                background-color: $primary;
                a {
                    color: $text-fff;
                }
            }
        }
    }
}

/* Responsive footer css */
@media only screen and (max-width: 1199px) {
    .width-50 {
        width: 100% !important;
    }
}

@media only screen and (max-width: 767px) {
    .width-100 {
        .bb-pro-box {
            display: block;
            overflow: hidden;
            .bb-pro-img {
                max-width: 100%;
                border-bottom: 1px solid $border-eee;
                border-right: 0;
                .inner-img {
                    border-bottom-left-radius: $radius-20;
                }
            }
            .bb-pro-contact {
                display: flex;
                flex-direction: column;
                justify-content: center;
                p {
                    display: flex;
                }
            }
        }
    }
}

@media only screen and (max-width: 575px) {
    .width-50 {
        .bb-pro-box {
            max-width: 380px;
            margin: auto;
            display: block;
            .bb-pro-img {
                max-width: 100%;
                border-bottom: 1px solid $border-eee;
                border-right: 0;
                .inner-img {
                    border-bottom-left-radius: $radius-20;
                }
            }
            .bb-pro-contact {
                display: flex;
                flex-direction: column;
                justify-content: center;
                p {
                    display: flex;
                }
            }
        }
    }
}

@media only screen and (max-width: 420px) {
    .bb-pro-list-top {
        .bb-select-inner {
            .custom-select {
                width: 100px;
                justify-content: flex-start;
            }
        }
    }
}
```

## File: pages/_single-product-page.scss
```scss
/* Single product page */
ul#ProTab {
    li.active {
        a {
            color: $primary;
        }
    }
}

.single-pro-slider {
    .single-nav-thumb {
        .slick-list {
            margin: 0 -8px;
        }
        .single-slide {
            display: block !important;
        }
        .slick-slide {
            &:hover {
                img {
                    border-color: $primary;
                }
            }
        }
        .slick-slide.slick-current.slick-active {
            img {
                border-color: $primary;
            }
        }
        .slick-arrow {
            top: 42%;
        }
        button {
            background: transparent;
            outline: 0;
            border: 0;
        }
        .slick-arrow.slick-prev {
            left: 0;
            right: auto;
        }
        .slick-arrow {
            position: absolute;
            top: 55%;
            left: auto;
            right: auto;
            margin: 0 auto;
            font-size: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            padding: 0;
            z-index: 1;
            transform: translateY(-50%);
            &:before {
                content: "";
                color: $text-color;
                position: relative;
                font-size: 42px;
                width: 100%;
                line-height: 30px;
                height: 30px;
            }
        }
        .slick-arrow.slick-prev {
            &:before {
                font-family: $remixico;
                content: "\EA52";
            }
        }
        .slick-arrow.slick-next {
            right: 0;
            left: auto;
            &:before {
                font-family: $remixico;
                content: "\EA54";
            }
        }
    }
}

.bb-single-pro-contact {
    .bb-single-pro-weight {
        .bb-pro-variation-contant {
            ul {
                li.active-variation {
                    background-color: $primary;
                    span{
                        color: $text-fff;
                    }
                }
            }
        }
    }
    .bb-single-qty {
        .bb-pro-actions {
            a {
                &:hover {
                    background-color: $primary;
                    i {
                        color: $text-fff;
                    }
                }
            }
        }
    }
}
```

## File: pages/_track.scss
```scss
/* Track */
.section-track {
    .bb-progress {
        li.active {
            border-color: $text-color;
            .number {
                width: 35px;
                height: 35px;
                background-color: rgba(104, 110, 125, .9);
            }
            .icon {
                i {
                    color: $text-color;
                }
            }
            .title {
                font-weight: 600;
                color: $text-color;
            }
        }
    }
}
```

## File: pages/_wishlist.scss
```scss
/* wishlist */
.bb-wish-rightside{
    .bb-wishlist-msg{
        padding: 30px 0;
        text-align: center;
        font-size: 50px;
        line-height: 32px;
        font-weight: 500;
        height: 100%;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        color: $text-color;
    }
}

/* Responsive */
@media screen and (max-width: 991px) {
    .bb-wish-rightside {
        .bb-wishlist-msg{
            font-size: 42px;
        }
    }
}

@media screen and (max-width: 767px) {
    .bb-wish-rightside {
        .bb-wishlist-msg{
            font-size: 36px;
        }
    }
}

@media screen and (max-width: 575px) {
    .bb-wish-rightside {
        .bb-wishlist-msg{
            font-size: 32px;
        }
    }
}
```

## File: rtl.scss
```scss
/* RTL Mode */
@import "utilities/_variables";

html * {
    direction: rtl;
}

.slick-slider *,
.swiper-wrapper,
.owl-carousel * {
    direction: ltr;
}

.hero-contact {
    h2,
    h1 {
        span {
            &:after {
                display: none;
            }
        }
    }
}
.custom-dropdown {
    ul.dropdown {
        li {
            a {
                text-align: right;
            }
        }
    }
    .bb-dropdown-toggle {
        &:after {
            right: -5px;
        }
    }
}
.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-header-btn {
            margin: 0 0 0 30px;
        }
        .bb-dropdown-menu {
            .inner-select {
                .custom-select {
                    padding-right: 0;
                    padding-left: 15px;
                    .select-options {
                        right: auto;
                        left: -15px;
                    }
                }
            }
        }
        .bb-main-menu {
            ul.navbar-nav {
                padding: 0;
                .bb-dropdown {
                    .bb-dropdown-menu {
                        left: auto;
                        right: 0;
                    }
                    .bb-dropdown-item {
                        &:after {
                            left: -14px;
                            right: auto;
                        }
                    }
                }
                li {
                    a {
                        svg {
                            margin-right: 0;
                            margin-left: 6px;
                        }
                    }
                    &:not(:last-child) {
                        margin-right: 0 !important;
                        margin-left: 45px;
                    }
                }
                .bb-mega-dropdown {
                    .bb-mega-menu {
                        left: auto;
                        right: 193px !important;
                        text-align: right;
                    }
                    .bb-mega-item {
                        &:after {
                            right: auto;
                            left: 10px;
                            transform: rotate(90deg);
                        }
                    }
                }
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            a {
                                text-align: right;
                            }
                        }
                    }
                    .bb-dropdown-item {
                        &:after {
                            padding-left: 0;
                            padding-right: 3px;
                        }
                    }
                }
                .bb-main-dropdown {
                    .mega-menu {
                        li {
                            margin-left: 0;
                            margin-right: 0;
                        }
                    }
                    .bb-dropdown-item {
                        &:after {
                            padding-left: 0;
                            padding-right: 3px;
                            left: -14px;
                            right: auto;
                        }
                    }
                }
            }
        }
    }
}

.bb-category-sidebar {
    .bb-category-search-button {
        .form-search {
            i {
                right: auto;
                left: 10px;
            }
        }
    }
    .bb-category-cart {
        .pro-img {
            margin-right: 0;
            margin-left: 12px;
        }
        .side-contact {
            align-items: flex-start;
        }
    }
}

.bb-pro-rating {
    i {
        margin-right: 0;
        margin-left: 3px;
    }
}

.bb-tags {
    ul {
        padding: 0;
    }
}

.list-inline-item {
    &:not(:last-child) {
        margin-left: 0.5rem;
        margin-right: 0;
    }
}

.bb-pro-pagination {
    ul {
        li {
            &:not(:last-child) {
                margin-left: 6px;
                margin-right: 0;
            }
        }
    }
}

.bb-mobile-menu {
    .bb-menu-inner {
        .bb-menu-content {
            ul {
                padding: 0;
                li {
                    .menu-toggle {
                        right: auto;
                        left: 5px;
                        &:before {
                            margin-right: auto;
                            margin-left: 5px;
                        }
                    }
                    .sub-menu {
                        li {
                            a {
                                padding-left: 0;
                                padding-right: 15px;
                            }
                            .sub-menu {
                                li {
                                    a {
                                        padding-left: 0;
                                        padding-right: 30px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

.dropdown-toggle {
    &::after {
        margin-left: 0;
        margin-right: 0.255em;
    }
}

.header-search {
    .bb-btn-group-form {
        button {
            right: auto;
            left: 0;
        }
        input {
            padding: 10px 160px 10px 10px;
        }
        .inner-select {
            left: auto;
            right: 0;
            border-right: 0;
            border-left: 1px solid $border-eee;
            .custom-select {
                .select-options {
                    right: -20px;
                    left: auto;
                }
            }
        }
    }
}

.bb-header-btn {
    &:not(:last-child) {
        margin-left: 30px;
        margin-right: auto;
    }
}

.custom-select {
    .custom-select {
        &:after {
            right: auto;
            left: 12px;
        }
    }
}
.bottom-header {
    .inner-bottom-header {
        .bb-header-buttons {
            .bb-acc-drop {
                .bb-dropdown-menu {
                    text-align: right;
                }
            }
            .bb-btn-desc {
                margin-left: auto;
                margin-right: 10px;
            }
        }
    }
}

.accordion-head.active-arrow {
    &:after {
        right: auto;
        left: 20px;
    }
}

.accordion-head {
    &:after {
        right: auto;
        left: 20px;
    }
}

.bb-main-menu-desk {
    .bb-inner-menu-desk {
        .bb-main-menu {
            ul.navbar-nav {
                .bb-dropdown {
                    .bb-dropdown-menu {
                        li {
                            margin: 0;
                        }
                    }
                }
            }
        }
    }
}

.bb-cart-table {
    table {
        thead {
            tr {
                th {
                    text-align: right;
                }
            }
        }
    }
}

.bb-category-block {
    margin-left: auto;
    margin-right: -150px;
    padding: 30px 30px 0 0;
    border-top-left-radius: $radius-0;
    border-top-right-radius: $radius-20;
    &:before {
        left: auto;
        right: 97px;
        transform: rotate(90deg);
    }
    &:after {
        left: auto;
        right: -29px;
        transform: rotate(90deg);
    }
}

.bb-inner-tabs {
    .information {
        ul {
            padding-left: 0;
            padding-right: 20px;
        }
    }
}

.bb-deal {
    .dealend-timer {
        .time-block {
            margin-left: auto;
            margin-right: 10px;
            .day {
                margin-left: auto;
                margin-right: 5px;
            }
            .dots {
                margin-left: auto;
                margin-right: 5px;
            }
        }
    }
}

.bb-pro-tab {
    ul.bb-pro-tab-nav {
        li {
            &:not(:last-child) {
                &:after {
                    right: auto;
                    left: -4px;
                }
            }
        }
    }
}

.bb-pro-box {
    .bb-pro-contact {
        text-align: right;
        .bb-pro-subtitle {
            direction: rtl;
        }
        .bb-price {
            direction: rtl;
        }
    }
}

.blog-2-card {
    .blog-contact {
        text-align: right;
    }
}

.bb-testimonials {
    .bb-testimonials-inner {
        .testimonials-row {
            direction: rtl;
        }
    }
}

.bb-vendors-img {
    .vendors-local-shape {
        right: auto;
        left: 0;
        border-top-left-radius: 0;
        border-top-right-radius: $radius-20;
        padding: 20px 20px 0 0;
        .inner-shape {
            &:before {
                right: auto;
                left: 0;
                transform: rotate(90deg);
            }
            &:after {
                left: auto;
                right: -50px;
                transform: rotate(90deg);
            }
        }
    }
}

.bb-testimonials {
    .bb-testimonials-inner {
        .testimonials-contact {
            text-align: right;
        }
    }
}

.bb-testimonials {
    .inner-banner {
        left: auto;
        right: 150px;
        transform: rotate(90deg);
    }
}

.bb-footer {
    .footer-top {
        .bb-footer-widget {
            .bb-footer-links {
                ul {
                    padding: 0;
                }
            }
        }
    }
    .footer-directory {
        .directory-contact {
            .inner-contact {
                ul {
                    padding: 0;
                    span {
                        margin-left: 12px;
                        margin-right: 0;
                    }
                    li {
                        &:not(:last-child) {
                            &:after {
                                right: auto;
                                left: -10px;
                            }
                        }
                    }
                }
            }
        }
    }
}

.bb-testimonials {
    .testimonials-img-1 {
        left: auto;
        right: 25px;
    }
    .testimonials-img-2 {
        left: auto;
        right: 0;
    }
    .testimonials-img-3 {
        right: auto;
        left: 500px;
    }
    .testimonials-img-4 {
        right: auto;
        left: 250px;
    }
    .testimonials-img-5 {
        right: auto;
        left: 20px;
    }
    .testimonials-img-6 {
        right: auto;
        left: 100px;
    }
}

.quickview-pro-content {
    .bb-quickview-price {
        justify-content: flex-start;
        span.old-price {
            margin-left: 0;
            margin-right: 10px;
        }
    }
}

.bb-pro-variation {
    ul {
        padding: 0;
    }
}

.bb-quickview-qty {
    .bb-quickview-cart {
        margin-left: 0;
        margin-right: 15px;
    }
}
.bb-header-btn {
    &:not(:last-child) {
        margin-right: 30px;
        margin-left: auto;
    }
}
.bb-side-cart {
    .bb-border-right {
        padding-left: 24px;
        padding-right: 0;
        border-right: 0;
        border-left: 1px solid #eee;
    }
    .bb-cart-box {
        ul.bb-cart-items {
            li {
                .bb-cart-contact {
                    padding-left: auto;
                    padding-right: 15px;
                    .bb-cart-sub-title {
                        padding: 0;
                    }
                }
            }
        }
    }
    .bb-top-contact {
        .bb-cart-title {
            .bb-cart-close {
                left: 0;
                right: auto;
            }
        }
    }
}

.bb-pro-list-top {
    .bb-select-inner {
        .custom-select {
            margin-right: 0;
            margin-left: 30px;
            &:after {
                right: auto;
                left: -10px;
            }
        }
    }
    .bb-bl-btn {
        button {
            &:not(:last-child) {
                margin-right: 0;
                margin-left: 5px;
            }
        }
    }
}

.width-100 {
    .bb-pro-box {
        .bb-pro-img {
            border-right: transparent;
            border-left: 1px solid $border-eee;
            .inner-img {
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
                border-bottom-right-radius: $radius-20;
                border-top-right-radius: $radius-20;
            }
        }
    }
}

.width-50 {
    .bb-pro-box {
        .bb-pro-img {
            border-right: transparent;
            border-left: 1px solid $border-eee;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            border-bottom-right-radius: $radius-20;
            border-top-right-radius: $radius-20;
        }
    }
}

.bb-single-pro-contact {
    .bb-single-rating {
        .bb-pro-rating {
            margin-right: 0;
        }
    }
    .bb-single-list {
        ul {
            padding-left: 0;
            padding-right: 18px;
        }
    }
}

.bb-inner-tabs,
.bey-single-accordion {
    .bb-details {
        .details-info {
            ul {
                padding-left: 0;
                padding-right: 20px;
            }
        }
    }
    .infomation {
        ul {
            padding-left: 0;
            padding-right: 20px;
        }
    }
    .bb-reviews {
        .reviews-bb-box {
            .inner-image {
                margin-right: 0;
                margin-left: 12px;
            }
        }
    }
    .bb-reviews-form {
        .bb-review-rating {
            span {
                padding-right: 0;
                padding-left: 10px;
            }
        }
    }
}

.accordion-button {
    &:after {
        margin-left: 0;
        margin-right: auto;
    }
}

.bb-cart-table {
    table {
        tbody {
            .Product-cart {
                span {
                    margin-left: 0;
                    margin-right: 10px;
                }
            }
        }
    }
}

.coupan-down-box {
    form {
        button {
            right: auto;
            left: 0;
            margin: 8px 0 8px 8px;
        }
    }
}

.bb-checkout-sidebar {
    .bb-checkout-pro {
        .pro-items {
            .image {
                margin-right: 0;
                margin-left: 15px;
            }
            .items-contact {
                .inner-price {
                    justify-content: flex-start;
                    .old-price {
                        margin-left: 0;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
}

.bb-checkout-contact {
    .checkout-radio {
        .radio-itens {
            input {
                margin-right: 0;
                margin-left: 2px;
            }
            &:not(:last-child) {
                margin-right: 0;
                margin-left: 20px;
            }
        }
    }
}

.coupon-down-box {
    button {
        right: auto;
        left: 0;
        margin-right: 0;
        margin-left: 8px;
    }
}

.bb-blog-sidebar {
    .blog-inner-contact {
        .blog-sidebar-card {
            .inner-image {
                margin-right: 0;
                margin-left: 20px;
            }
        }
    }
}

.bb-blog-details-contact {
    .bb-blog-details-comment {
        .bb-pl-50 {
            padding-right: 50px;
            padding-left: 0;
        }
        .second {
            padding-left: 0;
            padding-right: 50px;
        }
        .bb-comment-box {
            .inner-image {
                margin-right: 0;
                margin-left: 15px;
            }
        }
    }
}

/* Responsive */
@media (max-width: 1399px) {
    .bb-testimonials {
        .inner-banner {
            right: 110px;
        }
    }
    .bb-testimonials {
        .testimonials-img-1 {
            right: 10px;
        }
        .testimonials-img-6 {
            left: 50px;
        }
    }
}

@media (max-width: 1199px) {
    .bb-testimonials {
        .inner-banner {
            right: 30px;
        }
    }
    .bb-testimonials {
        .testimonials-img-6 {
            left: 0;
        }
    }
}

@media (max-width: 991px) {
    .bb-category-block {
        margin-right: 0;
        padding: 0;
    }
    .bb-heading-res {
        text-align: left;
    }
    .bb-toggle-menu {
        margin-right: 20px;
        margin-left: 0;
        display: flex;
    }
    .header-search {
        .bb-btn-group-form {
            input {
                padding: 10px;
            }
        }
    }
    .bb-category-toggle {
        margin-right: 20px;
        margin-left: 20px;
    }
}

@media (max-width: 767px) {
    .bb-header-btn {
        &:not(:last-child) {
            margin-right: auto;
            margin-left: 30px;
        }
    }
    .bb-toggle-menu {
        margin: 0;
    }
    .bottom-header {
        .inner-bottom-header {
            .bb-sidebar-toggle {
                margin-left: 0;
            }
        }
    }
}

@media (max-width: 575px) {
    .bb-testimonials {
        .bb-testimonials-inner {
            .testimonials-image {
                display: flex;
                float: inline-end;
            }
        }
    }
}

@media (max-width: 480px) {
    .header-search {
        .bb-btn-group-form {
            input {
                padding: 10px;
            }
        }
    }
}
```

## File: style.scss
```scss
/*-----------------------------------------------------------------------------------

Item Name: Blueberry - eCommerce Tailwind CSS template.
Author: Maraviya Infotech
Version: 1
Copyright 2024

-----------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------
    Included CSS INDEX
-----------------------------------------------------------------------------------

01. Typography

02. Utilities
    - Mixing
    - Variables

03. components
    - Header
    - Footer
    - Common
    - Cart sidebar
    - Category popup
    - Quick view
    - Newsletter popup

04. Layout 
    - Hero
    - Category
    - Product
    - Deal
    - Banner one
    - Banner two
    - New product
    - Vendors
    - Testimonials
    - Blog 2
    - Instagram

05. Pages
    - About
    - Shop page
    - Single product page
    - Cart page
    - Checkout page
    - Faq
    - Blog
    - Wishlist
    - Compare
    - Track

-----------------------------------------------------------------------------------*/

/* Typography ( Import Typography ) */
@import "base/_typography";

/* Utilities ( Import Utilities ) */
@import "utilities/_mixing";
@import "utilities/_variables";

/* components ( Import components ) */
@import "components/_common";
@import "components/_header";
@import "components/_footer";
@import "components/_cart-sidebar";
@import "components/_category-popup";
@import "components/_quickview";
@import "components/_newsletter-popup";
@import "components/_tools-sidebar";

/* Layouts ( Import Layouts ) */
@import "layouts/_hero";
@import "layouts/_category";
@import "layouts/_product";
@import "layouts/_deal";
@import "layouts/_banner-one";
@import "layouts/_banner-two";
@import "layouts/_new-product";
@import "layouts/_vendors";
@import "layouts/_testimonials";
@import "layouts/_blog-2";
@import "layouts/_instagram";

/* Pages ( Import Pages ) */
@import "pages/_about";
@import "pages/_shop-page";
@import "pages/_single-product-page";
@import "pages/_cart-page";
@import "pages/_checkout-page";
@import "pages/_faq";
@import "pages/_blog";
@import "pages/_wishlist";
@import "pages/_compare";
@import "pages/_track";
```

## File: utilities/_mixing.scss
```scss
/* mixing */
@mixin ease1 {
    transition: all 0.1s ease-in-out;
}

@mixin ease2 {
    transition: all 0.2s ease-in-out;
}

@mixin ease3 {
    transition: all 0.3s ease-in-out;
}

@mixin ease4 {
    transition: all 0.4s ease-in-out;
}

@mixin ease05 {
    transition: all 0.5s ease-in-out;
}

@mixin scrollbar() {
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        padding: 5px;
    }
    &::-webkit-scrollbar-track {
        width: 8px;
        background-color: #eee;
        -webkit-box-shadow: inset 0 0 0px $text-000;
    }
    &::-webkit-scrollbar-thumb {
        background-color: $secondary;
        border-radius: 20px;
    }
}
```

## File: utilities/_variables.scss
```scss
/* variables */
$title-font-family: "quicksand";
$text-font-family: "Poppins, sans-serif";
$remixico: 'remixicon';

$title-color: #3d4750;
$text-color: #686e7d;

$primary: #6c7fd8;
$primary-light: #f0f1ff;
$secondary: #3d4750;
$bg-box: #f8f8fb;
$bg-000: #000;
$text-000: #000;
$bg-fff: #fff;
$text-fff: #fff;
$border-eee: #eee;
$border-fff: #fff;
$text-777: #777;
$text-555: #555;
$bg-f5f5f5: #f5f5f5;
$bg-9e9e9e: #9e9e9e;
$green: #58a88a;
$rating-color : #fea99a;
$banner-bg-one: #fbf2e5;
$banner-bg-two: #ffe8ee;
$banner-shape-one: #f4dab4;
$banner-shape-two: #ffc6ce;
$red: #ff0000;
$close-color: #ff0000;
$off-pink: #ffa5a5;
$black_05 : rgba(0, 0, 0, 0.5);
$black_02 : rgba(0, 0, 0, 0.5);

$text-border-shape: 1px 1px #111a24, -1px 1px #111a24, 1px -1px #111a24, -1px -1px #111a24;
$deal-box-shadow: 0px 3px 16.2px 1.8px rgba(0, 0, 0, 0.06);

$category-color-1: #fef1f1;
$category-color-2: #e1fcf2;
$category-color-3: #f4f1fe;
$category-color-4: #fbf9e4;

$round-box-color-1: #c4d6f9;
$round-box-color-2: #ff748b;
$round-box-color-3: #000000;
$round-box-color-4: #2bff4a;
$round-box-color-5: #ff7c5e;
$round-box-color-6: #f155ff;
$round-box-color-7: #ffef00;
$round-box-color-8: #c89fff;
$round-box-color-9: #7bfffa;
$round-box-color-10: #56ffc1;

$radius-30: 30px;
$radius-20: 20px;
$radius-15: 15px;
$radius-10: 10px;
$radius-5: 5px;
$radius-0: 0px;

$color-1: #8118d5;
$color-1-light: #f2e3ff;
$color-2: #5f6af5;
$color-2-light:#e9ebff;
$color-3: #f5885f;
$color-3-light:#ffefe9;
$color-4: #32dbe2;
$color-4-light: #e0fbfb;
$color-5: #3f51b5;
$color-5-light: #e6eaff;
$color-6: #f44336;
$color-6-light: #ffefee;
$color-7: #e91e63;
$color-7-light: #ffe7ef;
$color-8: #607d8b;
$color-8-light: #eaf8ff;
$color-9: #5eb595;
$color-9-light: #ddf6ec;
```
