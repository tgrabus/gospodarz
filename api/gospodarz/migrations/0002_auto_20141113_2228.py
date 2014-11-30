# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gospodarz', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Categories',
            new_name='Category',
        ),
        migrations.RenameModel(
            old_name='Cities',
            new_name='City',
        ),
        migrations.RenameModel(
            old_name='Farmers',
            new_name='Farmer',
        ),
        migrations.RenameModel(
            old_name='Products',
            new_name='Product',
        ),
    ]
