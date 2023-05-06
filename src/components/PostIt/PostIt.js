import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./PostIt.sass";

export class PostIt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    onChangeText = event => {
        this.setState({ text: event.target.value });
    };

    onCreateMessage = event => {
        this.props.firebase.messages().push({
            data: this.state.text,
            autor: "DpK8oHammSjtwk9"
        });
        this.setState({ text: '' });
        event.preventDefault();
    };

    render() {

        const { text } = this.state;

        return <div className="postit">


            
            <div className="postit__header">
                    <div className="postit__header__back">
                    <Link to="/">

                        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 3L4 12L13 21" stroke="#C4C4C4" strokeWidth="5" strokeLinecap="round"/>
                        </svg>
                        <div className="postit__header__back__icon">
                            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="21.531" cy         ="24.4849" rx="16.5" ry="16" fill="#EA5B79"/>
                                <path d="M11.3629 41.9026C10.9703 41.9026 10.6527 41.5853 10.6527 41.1924C10.6527 38.4519 12.8834 36.2218 15.6239 36.2218C16.0168 36.2218 16.3341 36.5395 16.3341 36.932C16.3341 37.3249 16.0168 37.6422 15.6239 37.6422C13.6661 37.6422 12.073 39.2345 12.073 41.1924C12.073 41.5853 11.7557 41.9026 11.3629 41.9026Z" fill="#923649"/>
                                <path d="M18.4646 37.6429L15.6239 37.6422C15.2314 37.6422 14.9137 37.3242 14.9137 36.932C14.9137 36.5395 15.2321 36.2218 15.6239 36.2218L18.4646 36.2225C18.8575 36.2225 19.1748 36.5409 19.1748 36.9327C19.1748 37.3256 18.8568 37.6429 18.4646 37.6429Z" fill="#923649"/>
                                <path d="M11.3629 44.0338C10.9703 44.0338 10.6527 43.7165 10.6527 43.3236V41.3963C10.6527 41.0034 10.9703 40.6861 11.3629 40.6861C11.7557 40.6861 12.073 41.0034 12.073 41.3963V43.3236C12.073 43.7165 11.7557 44.0338 11.3629 44.0338Z" fill="#923649"/>
                                <path d="M32.6681 41.9026C32.2756 41.9026 31.958 41.5853 31.958 41.1924C31.958 39.2345 30.3649 37.6422 28.4071 37.6422C28.0145 37.6422 27.6969 37.3249 27.6969 36.932C27.6969 36.5395 28.0145 36.2218 28.4071 36.2218C31.1476 36.2218 33.3783 38.4519 33.3783 41.1924C33.3783 41.5853 33.061 41.9026 32.6681 41.9026Z" fill="#923649"/>
                                <path d="M25.5664 37.6429C25.1745 37.6429 24.8562 37.3256 24.8562 36.9327C24.8562 36.5409 25.1738 36.2225 25.5664 36.2225L28.4071 36.2218C28.7993 36.2218 29.1173 36.5395 29.1173 36.932C29.1173 37.3242 28.8 37.6422 28.4071 37.6422L25.5664 37.6429Z" fill="#923649"/>
                                <path d="M32.6682 44.0338C32.2756 44.0338 31.958 43.7165 31.958 43.3236V41.3963C31.958 41.0034 32.2756 40.6861 32.6682 40.6861C33.061 40.6861 33.3783 41.0034 33.3783 41.3963V43.3236C33.3783 43.7165 33.061 44.0338 32.6682 44.0338Z" fill="#923649"/>
                                <path d="M31.2478 45.4541H12.7832C12.3907 45.4541 12.073 45.1368 12.073 44.744C12.073 44.3514 12.3907 44.0338 12.7832 44.0338H31.2478C31.6407 44.0338 31.958 44.3514 31.958 44.744C31.958 45.1368 31.6407 45.4541 31.2478 45.4541Z" fill="#923649"/>
                                <path d="M18.4646 37.6429C18.0721 37.6429 17.7545 37.3256 17.7545 36.9327V34.6596C17.7545 34.2668 18.0721 33.9495 18.4646 33.9495C18.8575 33.9495 19.1748 34.2668 19.1748 34.6596V36.9327C19.1748 37.3256 18.8575 37.6429 18.4646 37.6429Z" fill="#923649"/>
                                <path d="M25.5664 37.6422C25.1738 37.6422 24.8562 37.3249 24.8562 36.932V34.6596C24.8562 34.2668 25.1738 33.9495 25.5664 33.9495C25.9593 33.9495 26.2766 34.2668 26.2766 34.6596V36.932C26.2766 37.3249 25.9593 37.6422 25.5664 37.6422Z" fill="#923649"/>
                                <path d="M22.0155 36.2218C17.3161 36.2218 13.4934 32.3991 13.4934 27.6997C13.4934 27.3072 13.811 26.9895 14.2036 26.9895C14.5964 26.9895 14.9137 27.3072 14.9137 27.6997C14.9137 31.6157 18.0995 34.8015 22.0155 34.8015C25.9315 34.8015 29.1173 31.6157 29.1173 27.6997C29.1173 27.3072 29.4349 26.9895 29.8275 26.9895C30.2203 26.9895 30.5376 27.3072 30.5376 27.6997C30.5376 32.3991 26.7149 36.2218 22.0155 36.2218Z" fill="#923649"/>
                                <path d="M14.2036 28.4106C13.811 28.4106 13.4934 28.0933 13.4934 27.7004V21.3081C13.4934 20.9156 13.811 20.5979 14.2036 20.5979C14.5964 20.5979 14.9137 20.9156 14.9137 21.3081V27.7004C14.9137 28.0933 14.5964 28.4106 14.2036 28.4106Z" fill="#923649"/>
                                <path d="M29.8275 28.4113C29.4349 28.4113 29.1173 28.094 29.1173 27.7011V21.3081C29.1173 20.9156 29.4349 20.5979 29.8275 20.5979C30.2203 20.5979 30.5376 20.9156 30.5376 21.3081V27.7011C30.5376 28.094 30.2203 28.4113 29.8275 28.4113Z" fill="#923649"/>
                                <path d="M29.8275 22.0183C29.4349 22.0183 29.1173 21.701 29.1173 21.3081C29.1173 19.7414 27.8433 18.4674 26.2766 18.4674C25.884 18.4674 25.5664 18.1501 25.5664 17.7572C25.5664 17.3647 25.884 17.047 26.2766 17.047C28.6266 17.047 30.5376 18.9581 30.5376 21.3081C30.5376 21.701 30.2204 22.0183 29.8275 22.0183Z" fill="#923649"/>
                                <path d="M26.2766 18.4674C25.884 18.4674 25.5664 18.1501 25.5664 17.7572V14.9165C25.5664 14.524 25.884 14.2063 26.2766 14.2063C26.6695 14.2063 26.9868 14.524 26.9868 14.9165V17.7572C26.9868 18.1501 26.6695 18.4674 26.2766 18.4674Z" fill="#923649"/>
                                <path d="M26.2765 15.6267H20.5951C20.2026 15.6267 19.8849 15.3094 19.8849 14.9165C19.8849 14.524 20.2026 14.2063 20.5951 14.2063H26.2765C26.6694 14.2063 26.9867 14.524 26.9867 14.9165C26.9867 15.3094 26.6694 15.6267 26.2765 15.6267Z" fill="#923649"/>
                                <path d="M14.2036 22.0183C13.811 22.0183 13.4934 21.701 13.4934 21.3081C13.4934 17.3924 16.6791 14.207 20.5952 14.207C20.988 14.207 21.3053 14.5247 21.3053 14.9172C21.3053 15.3101 20.988 15.6274 20.5952 15.6274C17.4625 15.6274 14.9137 18.1754 14.9137 21.3081C14.9137 21.701 14.5964 22.0183 14.2036 22.0183Z" fill="#923649"/>
                                <path d="M29.8275 25.5692C29.6458 25.5692 29.4641 25.4995 29.3254 25.3611L27.1948 23.2306C26.9171 22.9528 26.9171 22.5041 27.1948 22.2263C27.4726 21.9486 27.9213 21.9486 28.1991 22.2263L30.3296 24.3569C30.6074 24.6346 30.6074 25.0833 30.3296 25.3611C30.1912 25.4995 30.0092 25.5692 29.8275 25.5692Z" fill="#923649"/>
                                <path d="M22.0155 24.859C18.8304 24.859 16.1118 23.4154 15.9973 23.354C15.6523 23.1682 15.523 22.7385 15.7085 22.3924C15.8937 22.0481 16.3226 21.9153 16.6701 22.1029C16.6947 22.1164 19.1983 23.4386 22.0155 23.4386C24.8468 23.4386 27.3356 22.1171 27.3602 22.1029C27.7049 21.9174 28.1366 22.0467 28.3218 22.3917C28.5073 22.7371 28.3779 23.1682 28.0329 23.3533C27.9192 23.4154 25.2005 24.859 22.0155 24.859Z" fill="#923649"/>
                                <path d="M14.2036 25.5692C14.0219 25.5692 13.8402 25.4995 13.7015 25.3611C13.4237 25.0833 13.4237 24.6346 13.7015 24.3569L15.832 22.2263C16.1097 21.9486 16.5585 21.9486 16.8362 22.2263C17.114 22.5041 17.114 22.9528 16.8362 23.2306L14.7057 25.3611C14.5673 25.4995 14.3853 25.5692 14.2036 25.5692Z" fill="#923649"/>
                                <path d="M19.885 39.0626C19.7033 39.0626 19.5216 38.9929 19.3829 38.8545L17.9625 37.4348C17.6847 37.1571 17.6847 36.7084 17.9625 36.4306C18.2403 36.1532 18.689 36.1532 18.9667 36.4306L20.3871 37.8503C20.6649 38.128 20.6649 38.5767 20.3871 38.8545C20.2487 38.9929 20.0667 39.0626 19.885 39.0626Z" fill="#923649"/>
                                <path d="M19.885 39.0626C19.5875 39.0626 19.3104 38.8743 19.2119 38.5767C19.0874 38.2047 19.2885 37.8021 19.6606 37.6786L21.7912 36.9684C22.1653 36.8432 22.5651 37.0451 22.6896 37.4171C22.8138 37.7892 22.6126 38.1918 22.2406 38.3156L20.11 39.0258C20.0348 39.0504 19.9588 39.0626 19.885 39.0626Z" fill="#923649"/>
                                <path d="M24.146 39.0626C23.9643 39.0626 23.7826 38.9929 23.6439 38.8545C23.3662 38.5767 23.3662 38.128 23.6439 37.8503L25.0643 36.4306C25.342 36.1532 25.7908 36.1532 26.0685 36.4306C26.3463 36.7084 26.3463 37.1571 26.0685 37.4348L24.6482 38.8545C24.5098 38.9929 24.3278 39.0626 24.146 39.0626Z" fill="#923649"/>
                                <path d="M24.1461 39.0625C24.0722 39.0625 23.9963 39.0504 23.9217 39.0258L21.7912 38.3156C21.4198 38.1918 21.218 37.7899 21.3425 37.4171C21.4666 37.0457 21.865 36.8432 22.2406 36.9684L24.3711 37.6786C24.7425 37.802 24.9443 38.2039 24.8202 38.5767C24.7207 38.8742 24.4436 39.0625 24.1461 39.0625Z" fill="#923649"/>
                                <path d="M31.2478 45.4541C30.8553 45.4541 30.5376 45.1369 30.5376 44.744C30.5376 44.3514 30.8553 44.0338 31.2478 44.0338C31.64 44.0338 31.958 43.7158 31.958 43.3236C31.958 42.9311 32.2756 42.6134 32.6682 42.6134C33.061 42.6134 33.3783 42.9311 33.3783 43.3236C33.3783 44.4985 32.4223 45.4541 31.2478 45.4541Z" fill="#923649"/>
                                <path d="M12.7832 45.4541C11.6087 45.4541 10.6527 44.4985 10.6527 43.3236C10.6527 42.9311 10.9703 42.6134 11.3629 42.6134C11.7557 42.6134 12.073 42.9311 12.073 43.3236C12.073 43.7158 12.3914 44.0338 12.7832 44.0338C13.1761 44.0338 13.4934 44.3514 13.4934 44.744C13.4934 45.1369 13.1761 45.4541 12.7832 45.4541Z" fill="#923649"/>
                                <path d="M22.037 41.9033C21.6441 41.9033 21.323 41.586 21.323 41.1931C21.323 40.8005 21.6372 40.4829 22.029 40.4829H22.037C22.4289 40.4829 22.7472 40.8005 22.7472 41.1931C22.7472 41.586 22.4289 41.9033 22.037 41.9033Z" fill="#923649"/>
                                <path d="M4.99271 25.5671C4.59982 25.5671 4.27872 25.2498 4.27872 24.8569C4.27872 24.4644 4.59289 24.1467 4.98473 24.1467H4.99271C5.38456 24.1467 5.70289 24.4644 5.70289 24.8569C5.70289 25.2498 5.38456 25.5671 4.99271 25.5671Z" fill="#923649"/>
                                <path d="M4.97124 27.699C2.23075 27.699 0 25.4683 0 22.7278C0 19.9873 2.23005 17.7565 4.97124 17.7558C6.29936 17.7558 7.54772 18.2736 8.48676 19.2116C9.42546 20.1506 9.94249 21.399 9.94249 22.7271C9.94249 25.4683 7.71174 27.699 4.97124 27.699ZM4.97263 19.1762C3.01409 19.1769 1.42036 20.7699 1.42036 22.7278C1.42036 24.6856 3.0134 26.2787 4.97124 26.2787C6.92909 26.2787 8.52213 24.6856 8.52213 22.7271C8.52213 20.7692 6.92978 19.1762 4.97263 19.1762Z" fill="#923649"/>
                                <path d="M4.97122 23.4379C4.57869 23.4379 4.26105 23.1206 4.26105 22.7277V20.5958C4.26105 20.2033 4.57869 19.8857 4.97122 19.8857C5.36411 19.8857 5.6814 20.2033 5.6814 20.5958V22.7277C5.6814 23.1206 5.36411 23.4379 4.97122 23.4379Z" fill="#923649"/>
                                <path d="M11.3628 23.4386H9.233C8.84047 23.4386 8.52283 23.1213 8.52283 22.7285C8.52283 22.3359 8.84047 22.0183 9.233 22.0183H11.3628C11.7557 22.0183 12.073 22.3359 12.073 22.7285C12.073 23.1213 11.7557 23.4386 11.3628 23.4386Z" fill="#923649"/>
                                <path d="M39.082 25.5685C38.6891 25.5685 38.368 25.2512 38.368 24.8583C38.368 24.4657 38.6822 24.1481 39.074 24.1481H39.082C39.4738 24.1481 39.7922 24.4657 39.7922 24.8583C39.7922 25.2512 39.4738 25.5685 39.082 25.5685Z" fill="#923649"/>
                                <path d="M39.0604 27.6997C36.32 27.6997 34.0892 25.469 34.0892 22.7271C34.0892 19.9866 36.3193 17.7565 39.0598 17.7565C41.8002 17.7565 44.031 19.9873 44.031 22.7278C44.0303 25.4683 41.8002 27.699 39.0604 27.6997ZM39.0598 19.1769C37.1019 19.1769 35.5096 20.7692 35.5096 22.7271C35.5096 24.6856 37.1026 26.2794 39.0604 26.2794C41.0176 26.2787 42.6099 24.6856 42.6106 22.7278C42.6106 20.7699 41.0176 19.1769 39.0598 19.1769Z" fill="#923649"/>
                                <path d="M39.0604 23.4386C38.6686 23.4386 38.3503 23.1213 38.3503 22.7285L38.3496 20.5972C38.3496 20.2054 38.6672 19.8871 39.0598 19.8871C39.4519 19.8871 39.7699 20.2047 39.7699 20.5972L39.7706 22.7285C39.7706 23.1207 39.4533 23.4386 39.0604 23.4386Z" fill="#923649"/>
                                <path d="M34.7987 23.4393L32.6682 23.4386C32.2756 23.4386 31.958 23.1207 31.958 22.7285C31.958 22.3359 32.2763 22.0183 32.6682 22.0183L34.7987 22.019C35.1916 22.019 35.5089 22.3373 35.5089 22.7292C35.5089 23.122 35.1909 23.4393 34.7987 23.4393Z" fill="#923649"/>
                                <path d="M34.5927 13.0141C34.2002 13.0141 33.8791 12.6965 33.8791 12.304C33.8791 11.9111 34.1929 11.5938 34.5851 11.5938H34.5927C34.9849 11.5938 35.3029 11.9111 35.3029 12.304C35.3029 12.6965 34.9849 13.0141 34.5927 13.0141Z" fill="#923649"/>
                                <path d="M34.5716 15.1454C34.5709 15.1454 34.5709 15.1454 34.5716 15.1454C31.83 15.1454 29.6003 12.9146 29.6003 10.1728C29.6003 7.43191 31.83 5.20151 34.5709 5.20151C37.3114 5.20151 39.5414 7.43191 39.5414 10.1728C39.5414 12.9132 37.3114 15.144 34.5716 15.1454ZM34.5709 6.62186C32.6127 6.62186 31.0207 8.21456 31.0207 10.1728C31.0207 12.1313 32.6127 13.725 34.5709 13.725C36.528 13.7236 38.1211 12.1306 38.1211 10.1728C38.1211 8.21456 36.5287 6.62186 34.5709 6.62186Z" fill="#923649"/>
                                <path d="M34.5716 10.8843C34.1794 10.8843 33.8614 10.5667 33.8614 10.1748L33.86 8.0436C33.86 7.65072 34.1773 7.33273 34.5695 7.33273H34.5702C34.962 7.33273 35.2804 7.65002 35.2804 8.04222L35.2818 10.1734C35.2818 10.566 34.9634 10.8843 34.5716 10.8843Z" fill="#923649"/>
                                <path d="M30.0504 15.4037C29.8687 15.4037 29.687 15.334 29.5483 15.1956C29.2706 14.9179 29.2706 14.4685 29.5483 14.1914L31.0554 12.6858C31.3331 12.4083 31.7818 12.4083 32.0596 12.6858C32.3374 12.9635 32.3374 13.4133 32.0596 13.69L30.5526 15.1956C30.4142 15.334 30.2321 15.4037 30.0504 15.4037Z" fill="#923649"/>
                                <path d="M22.0384 7.81196C21.6455 7.81196 21.3244 7.49467 21.3244 7.10178C21.3244 6.70889 21.6386 6.3916 22.0304 6.3916H22.0384C22.4302 6.3916 22.7486 6.70889 22.7486 7.10178C22.7486 7.49467 22.4302 7.81196 22.0384 7.81196Z" fill="#923649"/>
                                <path d="M22.0162 9.94387C22.0155 9.94387 22.0155 9.94387 22.0162 9.94387C19.275 9.94387 17.0443 7.71312 17.0443 4.97124C17.0443 2.23075 19.275 0 22.0155 0C24.756 0 26.9867 2.23075 26.9867 4.97124C26.9867 7.71104 24.7567 9.94249 22.0162 9.94387ZM22.0155 1.42036C20.0577 1.42036 18.4646 3.0134 18.4646 4.97124C18.4646 6.92978 20.0577 8.52352 22.0155 8.52352C23.9733 8.52213 25.5664 6.92909 25.5664 4.97124C25.5664 3.0134 23.9733 1.42036 22.0155 1.42036Z" fill="#923649"/>
                                <path d="M22.0155 5.68283C21.6229 5.68283 21.3053 5.36554 21.3053 4.97265V2.84073C21.3053 2.44785 21.6229 2.13055 22.0155 2.13055C22.4084 2.13055 22.7257 2.44785 22.7257 2.84073V4.97265C22.7257 5.36554 22.4084 5.68283 22.0155 5.68283Z" fill="#923649"/>
                                <path d="M22.0169 12.0744C21.6243 12.0744 21.3067 11.7571 21.3067 11.3642V9.23368C21.3067 8.84114 21.6243 8.5235 22.0169 8.5235C22.4098 8.5235 22.7271 8.84114 22.7271 9.23368V11.3642C22.7271 11.7571 22.4098 12.0744 22.0169 12.0744Z" fill="#923649"/>
                                <path d="M9.4851 13.011C9.09256 13.011 8.77145 12.6937 8.77145 12.3008C8.77145 11.9083 9.08528 11.5907 9.47747 11.5907H9.4851C9.87729 11.5907 10.1953 11.9083 10.1953 12.3008C10.1953 12.6937 9.87729 13.011 9.4851 13.011Z" fill="#923649"/>
                                <path d="M9.46258 15.144C8.13377 15.144 6.88506 14.6263 5.94637 13.6865C5.00836 12.7478 4.49064 11.4984 4.49133 10.171C4.49133 7.43052 6.72104 5.19977 9.46188 5.19977C12.2024 5.19977 14.4324 7.43052 14.4324 10.171C14.4331 12.9112 12.2038 15.1416 9.46258 15.144ZM9.46188 6.62012C7.50369 6.62012 5.91169 8.21317 5.91169 10.171C5.91169 11.1201 6.281 12.012 6.95129 12.683C7.6209 13.3536 8.51278 13.7236 9.46119 13.7236C11.4197 13.7219 13.0128 12.1285 13.0121 10.171C13.0121 8.21317 11.4197 6.62012 9.46188 6.62012Z" fill="#923649"/>
                                <path d="M9.46186 10.8822C9.06897 10.8822 8.75168 10.5646 8.75168 10.172V8.04047C8.75168 7.64793 9.06897 7.33029 9.46186 7.33029C9.8544 7.33029 10.172 7.64793 10.172 8.04047V10.172C10.172 10.5646 9.8544 10.8822 9.46186 10.8822Z" fill="#923649"/>
                                <path d="M13.982 15.4023C13.8003 15.4023 13.6186 15.3326 13.4799 15.1943L11.9735 13.6879C11.6961 13.4102 11.6961 12.9614 11.9735 12.6837C12.2513 12.4063 12.7 12.4063 12.9778 12.6837L14.4841 14.19C14.7619 14.4678 14.7619 14.9165 14.4841 15.1943C14.3451 15.3326 14.163 15.4023 13.982 15.4023Z" fill="#923649"/>
                            </svg>
    
                        </div>
                        </Link>

                    </div>
                    <div className="postit__header__back__title">
                        <p className="postit__header__back__title__activity">Cinco Porqués</p>
                        <p>Registro de texto</p>
                    </div>
                    
            </div>
            <div className="postit__container">
                <p className="postit__container__label">
                    Escribe algo
                </p>
                
                <div className="postit__container__area">
                
                    <form onSubmit={this.onCreateMessage}>
                        <textarea  
                            maxLength="150" 
                            placeholder="Que sea corto. Máximo 150 letras"
                            value={text}
                            onChange={this.onChangeText}>
                        </textarea>

                        <div className="postit__buttons">
                            <Link to="/">
                                <p>Cancelar</p>
                            </Link>
                            <button>Agregar al tablero</button>
                        </div>
                    </form>
                    
                </div>
            </div>


        </div>
    }
}