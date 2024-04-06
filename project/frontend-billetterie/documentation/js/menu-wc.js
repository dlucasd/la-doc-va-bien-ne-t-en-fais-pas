'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular.billetterie documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-4b0dbeeb73642a09c1853acea1f0e31a9b533ca998b551405a3fc5c9fe93642031e638e38738a1b9232d4e4d71d2cd8418e3efd5b7a47a25d7c0f6e8ccb873b7"' : 'data-bs-target="#xs-components-links-module-AppModule-4b0dbeeb73642a09c1853acea1f0e31a9b533ca998b551405a3fc5c9fe93642031e638e38738a1b9232d4e4d71d2cd8418e3efd5b7a47a25d7c0f6e8ccb873b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4b0dbeeb73642a09c1853acea1f0e31a9b533ca998b551405a3fc5c9fe93642031e638e38738a1b9232d4e4d71d2cd8418e3efd5b7a47a25d7c0f6e8ccb873b7"' :
                                            'id="xs-components-links-module-AppModule-4b0dbeeb73642a09c1853acea1f0e31a9b533ca998b551405a3fc5c9fe93642031e638e38738a1b9232d4e4d71d2cd8418e3efd5b7a47a25d7c0f6e8ccb873b7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DashboardModule-59cbaec19b12916f0b8e44218f1ab08168e0d54c004ee437540a2f834ddbc670c69bb362c19cc5259770af86eac711798171032a2e5b9ba7d3c7008c4f1da307"' : 'data-bs-target="#xs-components-links-module-DashboardModule-59cbaec19b12916f0b8e44218f1ab08168e0d54c004ee437540a2f834ddbc670c69bb362c19cc5259770af86eac711798171032a2e5b9ba7d3c7008c4f1da307"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-59cbaec19b12916f0b8e44218f1ab08168e0d54c004ee437540a2f834ddbc670c69bb362c19cc5259770af86eac711798171032a2e5b9ba7d3c7008c4f1da307"' :
                                            'id="xs-components-links-module-DashboardModule-59cbaec19b12916f0b8e44218f1ab08168e0d54c004ee437540a2f834ddbc670c69bb362c19cc5259770af86eac711798171032a2e5b9ba7d3c7008c4f1da307"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReservationModule.html" data-type="entity-link" >ReservationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ReservationModule-a8e1b00d207a150e57511ff76d659bd04bfb11125d00c5854e90570c1a12affb7231ed5cce527cd90ca50cc9fc27766de91b1b60a3a80d0214b71f3d73495812"' : 'data-bs-target="#xs-components-links-module-ReservationModule-a8e1b00d207a150e57511ff76d659bd04bfb11125d00c5854e90570c1a12affb7231ed5cce527cd90ca50cc9fc27766de91b1b60a3a80d0214b71f3d73495812"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReservationModule-a8e1b00d207a150e57511ff76d659bd04bfb11125d00c5854e90570c1a12affb7231ed5cce527cd90ca50cc9fc27766de91b1b60a3a80d0214b71f3d73495812"' :
                                            'id="xs-components-links-module-ReservationModule-a8e1b00d207a150e57511ff76d659bd04bfb11125d00c5854e90570c1a12affb7231ed5cce527cd90ca50cc9fc27766de91b1b60a3a80d0214b71f3d73495812"' }>
                                            <li class="link">
                                                <a href="components/ReservationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservationDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservationSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReservationService.html" data-type="entity-link" >ReservationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/NoopInterceptor.html" data-type="entity-link" >NoopInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/NoopGuard.html" data-type="entity-link" >NoopGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Reservation.html" data-type="entity-link" >Reservation</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/FirstUpperPipe.html" data-type="entity-link" >FirstUpperPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/StandAlonePipe.html" data-type="entity-link" >StandAlonePipe</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});