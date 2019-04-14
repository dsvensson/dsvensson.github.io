---
title: "Setting up Redmine"
date: "2010-03-25"
---

About one and a half years ago I got tired of using Trac and started looking for alternatives. There were (are?) a lot of issues with Trac, but one of the more visible usability problems is that you write filters in SQL. As I'm accustomed to filters in a fire-and-forget fashion, from my years with the Mantis BTS, this doesn't really work for me. The Almighty Google Machine led me to a heap of people recommending Redmine as a drop-in replacement, with nice import scripts. A couple of days later I'd created my first Redmine instance and have not since looked back.

We've also started using Redmine in my project at work, and now the other projects are getting jealous on our fancy setup, hence this post.

Pre-reqs: One piece of hardware with Debian Lenny installed.

First start with adding the Debian Backports Apt repository to your sources.list:

```bash
$ echo "deb http://www.backports.org/debian lenny-backports \\
                      main contrib non-free" >> /etc/apt/sources.list
$ aptitude update
$ aptitude install debian-backports-keyring
$ aptitude update
```

Next up you'll need an Apache module with a very fancy web page, [Passenger](http://www.modrails.com/ "Passenger"):

```bash
$ aptitude -t lenny-backports install libapache2-mod-passenger
```

You're also going to need some database to store your crap in. I'm just going to base this on MySQL as that's the DB that was already running on those machines I run Redmine on, and there's no specific reason why I select version 5.1 here either:

```bash
$ aptitude -t lenny-backports install mysql-server-5.1
```

During the installation you'll be asked to enter a password for the root account on the MySQL database server. If you're out of ideas I can really recommend installing the `pwgen` package which will happily generate a secure password for you:

```bash
$ pwgen -sy | cat
```

Armed with a MySQL database and a secure password it's now time to create the Redmine database:

```bash
$ mysql -u root -p
```

```sql
mysql> CREATE DATABASE redmine CHARACTER SET UTF8;
Query OK, 1 row affected (0.00 sec)
mysql> CREATE USER 'redmine'@'localhost' IDENTIFIED BY 'my_password';
Query OK, 0 rows affected (0.00 sec)
mysql> GRANT ALL PRIVILEGES ON redmine.* TO 'redmine'@'localhost';
Query OK, 0 rows affected (0.00 sec)
mysql> exit
Bye
```

...where you'd obviously use that fancy `pwgen` tool to generate yet another super secure password that you'll forget before reading the rest of this text.

Armed with a database and a Ruby on Rails hungry Apache module you're now ready to grab Redmine:

```bash
$ cd /var/www
$ wget http://rubyforge.org/frs/download.php/69449/redmine-0.9.3.tar.gz
$ tar xvfz redmine-0.9.3.tar.gz
```

Now it's time to remember that fancy password of yours:

```bash
$ cd redmine-0.9.3
$ cat > config/database.yml << EOF
production:
  adapter: mysql
  database: redmine
  host: localhost
  username: redmine
  password: my-sikritt-passw0rd
EOF
```

Ok, so now Redmine is configured to access the database, but Rails is missing, lets grab it:

```bash
$ gem install rails -v=2.3.5
$ aptitude install libopenssl-ruby libmysql-ruby
```

Got Rails! Next up, prepare Redmine, and then populate the database:

```bash
$ RAILS_ENV=production rake config/initializers/session_store.rb
$ RAILS_ENV=production rake db:migrate
$ RAILS_ENV=production rake redmine:load_default_data
```

The last step here will ask for the default language, select something you can understand.

Ok, we're getting closer to actually run Redmine for the first time. The following steps will hook up Redmine to be run by Apache:

```bash
$ chown -R www-data:www-data files log tmp public/plugin_assets
$ mv public/.htaccess public/.disabled_htaccess
$ cat > /etc/apache2/sites-available/redmine << EOF
<VirtualHost _default_:80>
 ServerName your.domain.name
 DocumentRoot /var/www/redmine-0.9.3/public
 RailsEnv production
</VirtualHost>
EOF
$ a2ensite redmine
$ /etc/init.d/apache2 restart
```

When directing your browser to http://your.domain.name Redmine will present itself. You should of course make sure that the rest of your Apache installation works properly now and no strange directories are exposed to evil visitors, but otherwise you should be good to go.. enjoy!
