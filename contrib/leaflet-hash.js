


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>leaflet-hash/leaflet-hash.js at master · mlevans/leaflet-hash · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/modules/logos_page/Octocat.png">
    <link rel="assets" href="https://a248.e.akamai.net/assets.github.com/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="4bJKDSERJIZEcBtERcLBBz6nsbL4CE5kKbfO4zjVtok=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-fefedf42610dea2b58c3988045dcd6f71faa35d2.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-7e71c956ffd336c2781a61960c139912283f1a88.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-1f72571b966545f4e27481a3b0ebbeeed4f2f139.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-58cf8a80a2e8ddd1bf940e4e76c489ae60e43b9c.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="d0bea63caed668e2453796afc675cdbc">

        <link data-pjax-transient rel='permalink' href='/mlevans/leaflet-hash/blob/78478e0349b332afe6b8ae8eeaffcfd867da06ae/leaflet-hash.js'>
  <meta property="og:title" content="leaflet-hash"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/mlevans/leaflet-hash"/>
  <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="leaflet-hash - Add URL hashes to web pages with Leaflet maps."/>

  <meta name="description" content="leaflet-hash - Add URL hashes to web pages with Leaflet maps." />

  <meta content="386185" name="octolytics-dimension-user_id" /><meta content="mlevans" name="octolytics-dimension-user_login" /><meta content="4754038" name="octolytics-dimension-repository_id" /><meta content="mlevans/leaflet-hash" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4754038" name="octolytics-dimension-repository_network_root_id" /><meta content="mlevans/leaflet-hash" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mlevans/leaflet-hash/commits/master.atom" rel="alternate" title="Recent Commits to leaflet-hash:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production ">

    <div class="wrapper">
      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
      <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Fmlevans%2Fleaflet-hash%2Fblob%2Fmaster%2Fleaflet-hash.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="mlevans/leaflet-hash"
      data-branch="master"
      data-sha="44010ad868a575dc89c79540f759a178d28fa98a"
  >

    <input type="hidden" name="nwo" value="mlevans/leaflet-hash" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


    <li>
      <a href="/login?return_to=%2Fmlevans%2Fleaflet-hash"
        class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/mlevans/leaflet-hash/stargazers">
        50
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fmlevans%2Fleaflet-hash"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/mlevans/leaflet-hash/network" class="social-count">
        20
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/mlevans" class="url fn" itemprop="url" rel="author"><span itemprop="title">mlevans</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/mlevans/leaflet-hash" class="js-current-repository js-repo-home-link">leaflet-hash</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container
            ">

          <div class="repository-sidebar">

              

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/mlevans/leaflet-hash" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /mlevans/leaflet-hash">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/mlevans/leaflet-hash/issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /mlevans/leaflet-hash/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>7</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/mlevans/leaflet-hash/pulls" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /mlevans/leaflet-hash/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>3</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/mlevans/leaflet-hash/wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /mlevans/leaflet-hash/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/mlevans/leaflet-hash/pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /mlevans/leaflet-hash/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/mlevans/leaflet-hash/graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /mlevans/leaflet-hash/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/mlevans/leaflet-hash/network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /mlevans/leaflet-hash/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>


              <div class="only-with-full-nav">

                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/mlevans/leaflet-hash.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mlevans/leaflet-hash.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/mlevans/leaflet-hash" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mlevans/leaflet-hash" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>




                  <a href="/mlevans/leaflet-hash/archive/master.zip"
                     class="minibutton sidebar-button"
                     title="Download this repository as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>

              </div>
          </div>

          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
            


<!-- blob contrib key: blob_contributors:v21:b13f6e4c639917f38753c961cb7078ca -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:b13f6e4c639917f38753c961cb7078ca -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/mlevans/leaflet-hash/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mlevans/leaflet-hash/blob/gh-pages/leaflet-hash.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mlevans/leaflet-hash/blob/master/leaflet-hash.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mlevans/leaflet-hash" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">leaflet-hash</span></a></span></span><span class="separator"> / </span><strong class="final-path">leaflet-hash.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="leaflet-hash.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/a82409021ddf415a8027872b889c5f74?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/jfirebaugh" rel="author">jfirebaugh</a></span>
    <time class="js-relative-date" datetime="2013-04-09T14:24:27-07:00" title="2013-04-09 14:24:27">April 09, 2013</time>
    <div class="commit-title">
        <a href="/mlevans/leaflet-hash/commit/5fd26cfcc5957aeb0ee82dd0e22287332cd552e8" class="message">Clean up event bindings and timeouts on removal</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>6</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="calvinmetcalf" href="/mlevans/leaflet-hash/commits/master/leaflet-hash.js?author=calvinmetcalf"><img height="20" src="https://secure.gravatar.com/avatar/f015b4988bd660405cdf3c3d89c129a4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="yohanboniface" href="/mlevans/leaflet-hash/commits/master/leaflet-hash.js?author=yohanboniface"><img height="20" src="https://secure.gravatar.com/avatar/a6404bbbb731ddfaf0a297077495989b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tmcw" href="/mlevans/leaflet-hash/commits/master/leaflet-hash.js?author=tmcw"><img height="20" src="https://secure.gravatar.com/avatar/69a180136f3c237769452a4af0bbb9a1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mlevans" href="/mlevans/leaflet-hash/commits/master/leaflet-hash.js?author=mlevans"><img height="20" src="https://secure.gravatar.com/avatar/d9d4dfbc2edd36ce1b9496261e037859?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jfirebaugh" href="/mlevans/leaflet-hash/commits/master/leaflet-hash.js?author=jfirebaugh"><img height="20" src="https://secure.gravatar.com/avatar/a82409021ddf415a8027872b889c5f74?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rsudekum" href="/mlevans/leaflet-hash/commits/master/leaflet-hash.js?author=rsudekum"><img height="20" src="https://secure.gravatar.com/avatar/b0b82784774c31ffba1f685fec56abca?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/f015b4988bd660405cdf3c3d89c129a4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/calvinmetcalf">calvinmetcalf</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/a6404bbbb731ddfaf0a297077495989b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/yohanboniface">yohanboniface</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/69a180136f3c237769452a4af0bbb9a1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/tmcw">tmcw</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/d9d4dfbc2edd36ce1b9496261e037859?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mlevans">mlevans</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/a82409021ddf415a8027872b889c5f74?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jfirebaugh">jfirebaugh</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/b0b82784774c31ffba1f685fec56abca?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/rsudekum">rsudekum</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>160 lines (136 sloc)</span>
        <span>3.4 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton js-entice" href=""
                 data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
          <a href="/mlevans/leaflet-hash/raw/master/leaflet-hash.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/mlevans/leaflet-hash/blame/master/leaflet-hash.js" class="button minibutton ">Blame</a>
          <a href="/mlevans/leaflet-hash/commits/master/leaflet-hash.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
      </div><!-- /.actions -->

    </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2'>	<span class="kd">var</span> <span class="nx">HAS_HASHCHANGE</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC3'>		<span class="kd">var</span> <span class="nx">doc_mode</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">documentMode</span><span class="p">;</span></div><div class='line' id='LC4'>		<span class="k">return</span> <span class="p">(</span><span class="s1">&#39;onhashchange&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC5'>			<span class="p">(</span><span class="nx">doc_mode</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">doc_mode</span> <span class="o">&gt;</span> <span class="mi">7</span><span class="p">);</span></div><div class='line' id='LC6'>	<span class="p">})();</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'>	<span class="nx">L</span><span class="p">.</span><span class="nx">Hash</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">map</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'>		<span class="k">this</span><span class="p">.</span><span class="nx">onHashChange</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nx">Util</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">onHashChange</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'>		<span class="k">if</span> <span class="p">(</span><span class="nx">map</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'>			<span class="k">this</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="nx">map</span><span class="p">);</span></div><div class='line' id='LC13'>		<span class="p">}</span></div><div class='line' id='LC14'>	<span class="p">};</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>	<span class="nx">L</span><span class="p">.</span><span class="nx">Hash</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC17'>		<span class="nx">map</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC18'>		<span class="nx">lastHash</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>		<span class="nx">parseHash</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">hash</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>			<span class="k">if</span><span class="p">(</span><span class="nx">hash</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;#&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC22'>				<span class="nx">hash</span> <span class="o">=</span> <span class="nx">hash</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC23'>			<span class="p">}</span></div><div class='line' id='LC24'>			<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">hash</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">);</span></div><div class='line' id='LC25'>			<span class="k">if</span> <span class="p">(</span><span class="nx">args</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>				<span class="kd">var</span> <span class="nx">zoom</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">args</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="mi">10</span><span class="p">),</span></div><div class='line' id='LC27'>				<span class="nx">lat</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">args</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span></div><div class='line' id='LC28'>				<span class="nx">lon</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">args</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span></div><div class='line' id='LC29'>				<span class="k">if</span> <span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">zoom</span><span class="p">)</span> <span class="o">||</span> <span class="nb">isNaN</span><span class="p">(</span><span class="nx">lat</span><span class="p">)</span> <span class="o">||</span> <span class="nb">isNaN</span><span class="p">(</span><span class="nx">lon</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC30'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC31'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC32'>					<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC33'>						<span class="nx">center</span><span class="o">:</span> <span class="k">new</span> <span class="nx">L</span><span class="p">.</span><span class="nx">LatLng</span><span class="p">(</span><span class="nx">lat</span><span class="p">,</span> <span class="nx">lon</span><span class="p">),</span></div><div class='line' id='LC34'>						<span class="nx">zoom</span><span class="o">:</span> <span class="nx">zoom</span></div><div class='line' id='LC35'>					<span class="p">};</span></div><div class='line' id='LC36'>				<span class="p">}</span></div><div class='line' id='LC37'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC38'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC39'>			<span class="p">}</span></div><div class='line' id='LC40'>		<span class="p">},</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>		<span class="nx">formatHash</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">map</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>			<span class="kd">var</span> <span class="nx">center</span> <span class="o">=</span> <span class="nx">map</span><span class="p">.</span><span class="nx">getCenter</span><span class="p">(),</span></div><div class='line' id='LC44'>			    <span class="nx">zoom</span> <span class="o">=</span> <span class="nx">map</span><span class="p">.</span><span class="nx">getZoom</span><span class="p">(),</span></div><div class='line' id='LC45'>			    <span class="nx">precision</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">zoom</span><span class="p">)</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">LN2</span><span class="p">));</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>			<span class="k">return</span> <span class="s2">&quot;#&quot;</span> <span class="o">+</span> <span class="p">[</span><span class="nx">zoom</span><span class="p">,</span></div><div class='line' id='LC48'>				<span class="nx">center</span><span class="p">.</span><span class="nx">lat</span><span class="p">.</span><span class="nx">toFixed</span><span class="p">(</span><span class="nx">precision</span><span class="p">),</span></div><div class='line' id='LC49'>				<span class="nx">center</span><span class="p">.</span><span class="nx">lng</span><span class="p">.</span><span class="nx">toFixed</span><span class="p">(</span><span class="nx">precision</span><span class="p">)</span></div><div class='line' id='LC50'>			<span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">);</span></div><div class='line' id='LC51'>		<span class="p">},</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>		<span class="nx">init</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">map</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>			<span class="k">this</span><span class="p">.</span><span class="nx">map</span> <span class="o">=</span> <span class="nx">map</span><span class="p">;</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>			<span class="c1">// reset the hash</span></div><div class='line' id='LC57'>			<span class="k">this</span><span class="p">.</span><span class="nx">lastHash</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC58'>			<span class="k">this</span><span class="p">.</span><span class="nx">onHashChange</span><span class="p">();</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isListening</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>				<span class="k">this</span><span class="p">.</span><span class="nx">startListening</span><span class="p">();</span></div><div class='line' id='LC62'>			<span class="p">}</span></div><div class='line' id='LC63'>		<span class="p">},</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>		<span class="nx">remove</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC66'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">changeTimeout</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC67'>				<span class="nx">clearTimeout</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">changeTimeout</span><span class="p">);</span></div><div class='line' id='LC68'>			<span class="p">}</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isListening</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC71'>				<span class="k">this</span><span class="p">.</span><span class="nx">stopListening</span><span class="p">();</span></div><div class='line' id='LC72'>			<span class="p">}</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>			<span class="k">this</span><span class="p">.</span><span class="nx">map</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC75'>		<span class="p">},</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>		<span class="nx">onMapMove</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC78'>			<span class="c1">// bail if we&#39;re moving the map (updating from a hash),</span></div><div class='line' id='LC79'>			<span class="c1">// or if the map is not yet loaded</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">movingMap</span> <span class="o">||</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">.</span><span class="nx">_loaded</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC82'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC83'>			<span class="p">}</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>			<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">formatHash</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">);</span></div><div class='line' id='LC86'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">lastHash</span> <span class="o">!=</span> <span class="nx">hash</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>				<span class="nx">location</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">hash</span><span class="p">);</span></div><div class='line' id='LC88'>				<span class="k">this</span><span class="p">.</span><span class="nx">lastHash</span> <span class="o">=</span> <span class="nx">hash</span><span class="p">;</span></div><div class='line' id='LC89'>			<span class="p">}</span></div><div class='line' id='LC90'>		<span class="p">},</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>		<span class="nx">movingMap</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC93'>		<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC94'>			<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">;</span></div><div class='line' id='LC95'>			<span class="k">if</span> <span class="p">(</span><span class="nx">hash</span> <span class="o">===</span> <span class="k">this</span><span class="p">.</span><span class="nx">lastHash</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC97'>			<span class="p">}</span></div><div class='line' id='LC98'>			<span class="kd">var</span> <span class="nx">parsed</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">parseHash</span><span class="p">(</span><span class="nx">hash</span><span class="p">);</span></div><div class='line' id='LC99'>			<span class="k">if</span> <span class="p">(</span><span class="nx">parsed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC100'>				<span class="k">this</span><span class="p">.</span><span class="nx">movingMap</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>				<span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">.</span><span class="nx">setView</span><span class="p">(</span><span class="nx">parsed</span><span class="p">.</span><span class="nx">center</span><span class="p">,</span> <span class="nx">parsed</span><span class="p">.</span><span class="nx">zoom</span><span class="p">);</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>				<span class="k">this</span><span class="p">.</span><span class="nx">movingMap</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC105'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC106'>				<span class="k">this</span><span class="p">.</span><span class="nx">onMapMove</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">);</span></div><div class='line' id='LC107'>			<span class="p">}</span></div><div class='line' id='LC108'>		<span class="p">},</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>		<span class="c1">// defer hash change updates every 100ms</span></div><div class='line' id='LC111'>		<span class="nx">changeDefer</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC112'>		<span class="nx">changeTimeout</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC113'>		<span class="nx">onHashChange</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC114'>			<span class="c1">// throttle calls to update() so that they only happen every</span></div><div class='line' id='LC115'>			<span class="c1">// `changeDefer` ms</span></div><div class='line' id='LC116'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">changeTimeout</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>				<span class="kd">var</span> <span class="nx">that</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC118'>				<span class="k">this</span><span class="p">.</span><span class="nx">changeTimeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC119'>					<span class="nx">that</span><span class="p">.</span><span class="nx">update</span><span class="p">();</span></div><div class='line' id='LC120'>					<span class="nx">that</span><span class="p">.</span><span class="nx">changeTimeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC121'>				<span class="p">},</span> <span class="k">this</span><span class="p">.</span><span class="nx">changeDefer</span><span class="p">);</span></div><div class='line' id='LC122'>			<span class="p">}</span></div><div class='line' id='LC123'>		<span class="p">},</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>		<span class="nx">isListening</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC126'>		<span class="nx">hashChangeInterval</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC127'>		<span class="nx">startListening</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC128'>			<span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;moveend&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onMapMove</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>			<span class="k">if</span> <span class="p">(</span><span class="nx">HAS_HASHCHANGE</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'>				<span class="nx">L</span><span class="p">.</span><span class="nx">DomEvent</span><span class="p">.</span><span class="nx">addListener</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="s2">&quot;hashchange&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onHashChange</span><span class="p">);</span></div><div class='line' id='LC132'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC133'>				<span class="nx">clearInterval</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hashChangeInterval</span><span class="p">);</span></div><div class='line' id='LC134'>				<span class="k">this</span><span class="p">.</span><span class="nx">hashChangeInterval</span> <span class="o">=</span> <span class="nx">setInterval</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">onHashChange</span><span class="p">,</span> <span class="mi">50</span><span class="p">);</span></div><div class='line' id='LC135'>			<span class="p">}</span></div><div class='line' id='LC136'>			<span class="k">this</span><span class="p">.</span><span class="nx">isListening</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC137'>		<span class="p">},</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>		<span class="nx">stopListening</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC140'>			<span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">.</span><span class="nx">off</span><span class="p">(</span><span class="s2">&quot;moveend&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onMapMove</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>			<span class="k">if</span> <span class="p">(</span><span class="nx">HAS_HASHCHANGE</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>				<span class="nx">L</span><span class="p">.</span><span class="nx">DomEvent</span><span class="p">.</span><span class="nx">removeListener</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="s2">&quot;hashchange&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">onHashChange</span><span class="p">);</span></div><div class='line' id='LC144'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC145'>				<span class="nx">clearInterval</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hashChangeInterval</span><span class="p">);</span></div><div class='line' id='LC146'>			<span class="p">}</span></div><div class='line' id='LC147'>			<span class="k">this</span><span class="p">.</span><span class="nx">isListening</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC148'>		<span class="p">}</span></div><div class='line' id='LC149'>	<span class="p">};</span></div><div class='line' id='LC150'>	<span class="nx">L</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">map</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>		<span class="k">return</span> <span class="k">new</span> <span class="nx">L</span><span class="p">.</span><span class="nx">Hash</span><span class="p">(</span><span class="nx">map</span><span class="p">);</span></div><div class='line' id='LC152'>	<span class="p">};</span></div><div class='line' id='LC153'>	<span class="nx">L</span><span class="p">.</span><span class="nx">Map</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addHash</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC154'>		<span class="k">this</span><span class="p">.</span><span class="nx">_hash</span> <span class="o">=</span> <span class="nx">L</span><span class="p">.</span><span class="nx">hash</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC155'>	<span class="p">};</span></div><div class='line' id='LC156'>	<span class="nx">L</span><span class="p">.</span><span class="nx">Map</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">removeHash</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC157'>		<span class="k">this</span><span class="p">.</span><span class="nx">_hash</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC158'>	<span class="p">};</span></div><div class='line' id='LC159'><span class="p">})(</span><span class="nb">window</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;">
    <button type="submit" class="button">Go</button>
  </form>
</div>
          </div>
        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div>
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">Developer</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.04069s from fe17.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/mlevans/leaflet-hash/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
    <span id='server_response_time' data-time='0.04107' data-host='fe17'></span>
    
  </body>
</html>

